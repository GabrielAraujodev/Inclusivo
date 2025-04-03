import { VideoSection } from './VideoSection';
import { CommunicationSection } from './CommunicationSection';
import { SocialInteractionSection } from './SocialInteractionSection';
import { EmotionsSection } from './EmotionsSection';

export function SkillsModule() {
  return (
    <div className="space-y-8">
      <VideoSection />
      <CommunicationSection />
      <SocialInteractionSection />
      <EmotionsSection />
    </div>
  );
}