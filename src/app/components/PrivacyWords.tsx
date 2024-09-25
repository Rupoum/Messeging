"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `With private messaging , you can be yourself, speak freely and feel close to the most important people in your life no matter where they are.`;

export function PrivacyWords() {
  return <TextGenerateEffect words={words} />;
}
