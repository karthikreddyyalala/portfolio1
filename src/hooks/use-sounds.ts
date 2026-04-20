"use client";

import { useCallback, useEffect, useRef } from "react";

export const useSounds = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const pressBufferRef = useRef<AudioBuffer | null>(null);
  const releaseBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    const loadSounds = async () => {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const [pressRes, releaseRes] = await Promise.all([
          fetch("/assets/keycap-sounds/press.mp3"),
          fetch("/assets/keycap-sounds/release.mp3"),
        ]);

        const [pressArrayBuffer, releaseArrayBuffer] = await Promise.all([
          pressRes.arrayBuffer(),
          releaseRes.arrayBuffer(),
        ]);

        const [pressBuffer, releaseBuffer] = await Promise.all([
          ctx.decodeAudioData(pressArrayBuffer),
          ctx.decodeAudioData(releaseArrayBuffer),
        ]);

        pressBufferRef.current = pressBuffer;
        releaseBufferRef.current = releaseBuffer;
      } catch {
        // Audio not available — silent fail
      }
    };

    loadSounds();

    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  const playBuffer = useCallback((buffer: AudioBuffer) => {
    const ctx = audioContextRef.current;
    if (!ctx) return;

    const fire = () => {
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.detune.value = Math.random() * 200 - 100;
      source.connect(ctx.destination);
      source.start();
    };

    if (ctx.state === "suspended") {
      ctx.resume().then(fire);
    } else {
      fire();
    }
  }, []);

  const playPressSound = useCallback(() => {
    if (pressBufferRef.current) playBuffer(pressBufferRef.current);
  }, [playBuffer]);

  const playReleaseSound = useCallback(() => {
    if (releaseBufferRef.current) playBuffer(releaseBufferRef.current);
  }, [playBuffer]);

  return { playPressSound, playReleaseSound };
};
