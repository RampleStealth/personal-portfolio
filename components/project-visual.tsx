import Image from "next/image";

const projectImages = [
  "/projects/ai-email-organizer.png",
  "/projects/wong-studio.png",
  "/projects/wong-design-system.png",
] as const;

const projectAltText = [
  "Concept visual for the AI Email Organizer project",
  "Concept visual for the Wong Studio project",
  "Concept visual for the Wong Design System project",
] as const;

export function ProjectVisual({ variant, priority = false, sizes = "(min-width: 1024px) 50vw, 100vw" }: { variant: number; priority?: boolean; sizes?: string }) {
  const imageIndex = Math.min(Math.max(variant, 0), projectImages.length - 1);

  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-xl border border-ink/10 bg-sand/45 shadow-card">
      <Image
        src={projectImages[imageIndex]}
        alt={projectAltText[imageIndex]}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </figure>
  );
}
