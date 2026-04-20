"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SplineEvent } from "@splinetool/runtime";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/skills-constants";
import { useSounds } from "@/hooks/use-sounds";

export function SplineKeyboard() {
  const [splineApp, setSplineApp] = useState<Application>();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const selectedSkillRef = useRef<Skill | null>(null);
  const { playPressSound, playReleaseSound } = useSounds();

  const revealKeycaps = async (app: Application) => {
    // Scale down the keyboard to fit in the container
    const kbd = app.findObjectByName("keyboard");
    if (kbd) {
      kbd.scale.x = 0.22;
      kbd.scale.y = 0.22;
      kbd.scale.z = 0.22;
      kbd.position.x = 0;
      kbd.position.y = -60;
      kbd.position.z = 0;
      kbd.rotation.x = 0;
      kbd.rotation.y = Math.PI / 12;
      kbd.rotation.z = 0;
    }

    const allObjects = app.getAllObjects();
    allObjects
      .filter((o) => o.name === "keycap-desktop")
      .forEach((o) => { o.visible = true; });
    const keycaps = allObjects.filter((o) => o.name === "keycap");
    keycaps.forEach(async (keycap, idx) => {
      keycap.visible = false;
      await new Promise((r) => setTimeout(r, idx * 55));
      keycap.visible = true;
    });
  };

  useEffect(() => {
    if (!splineApp) return;
    revealKeycaps(splineApp);

    const isInputFocused = () => {
      const el = document.activeElement;
      return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA");
    };

    const onHover = (e: SplineEvent) => {
      if (e.target.name === "body" || e.target.name === "platform") {
        if (selectedSkillRef.current) playReleaseSound();
        selectedSkillRef.current = null;
        setSelectedSkill(null);
        try { splineApp.setVariable("heading", ""); splineApp.setVariable("desc", ""); } catch {}
      } else {
        const skill = SKILLS[e.target.name as SkillNames];
        if (skill && selectedSkillRef.current?.name !== e.target.name) {
          if (selectedSkillRef.current) playReleaseSound();
          playPressSound();
          selectedSkillRef.current = skill;
          setSelectedSkill(skill);
          try { splineApp.setVariable("heading", skill.label); splineApp.setVariable("desc", skill.shortDescription); } catch {}
        }
      }
    };

    const onKeyDown = (e: SplineEvent) => {
      if (isInputFocused()) return;
      const skill = SKILLS[e.target.name as SkillNames];
      if (skill) {
        playPressSound();
        selectedSkillRef.current = skill;
        setSelectedSkill(skill);
        try { splineApp.setVariable("heading", skill.label); splineApp.setVariable("desc", skill.shortDescription); } catch {}
      }
    };

    const onKeyUp = () => {
      if (isInputFocused()) return;
      playReleaseSound();
      try { splineApp.setVariable("heading", ""); splineApp.setVariable("desc", ""); } catch {}
    };

    splineApp.addEventListener("mouseHover", onHover);
    splineApp.addEventListener("keyDown", onKeyDown);
    splineApp.addEventListener("keyUp", onKeyUp);

    return () => {
      splineApp.removeEventListener("mouseHover", onHover);
      splineApp.removeEventListener("keyDown", onKeyDown);
      splineApp.removeEventListener("keyUp", onKeyUp);
    };
  }, [splineApp]);

  return (
    <section className="relative py-20 bg-[#030303] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-6 pointer-events-none">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-3 bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white to-violet-300">
          Tech Stack
        </h2>
        <p className="text-white/30 text-xs tracking-[0.22em] uppercase">hover a key to explore my stack</p>
      </div>

      {/* Spline canvas — contained, not full viewport */}
      <div className="relative mx-auto" style={{ width: "100%", maxWidth: 1000, height: 580 }}>
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
          </div>
        }>
          <Spline
            scene="/assets/skills-keyboard.spline"
            onLoad={(app: Application) => setSplineApp(app)}
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>

        {/* Skill tooltip inside canvas area */}
        {selectedSkill && (
          <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
            <div className="px-5 py-2.5 rounded-2xl bg-white/[0.07] border border-white/[0.12] backdrop-blur-sm text-center">
              <p className="text-white font-semibold text-sm">{selectedSkill.label}</p>
              <p className="text-white/50 text-xs mt-0.5">{selectedSkill.shortDescription}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
