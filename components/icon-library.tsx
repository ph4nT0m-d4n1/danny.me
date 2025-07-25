import Image from "next/image";
import DesktopIcon from "./desktop-icon";

export function AboutIcon({ onClick }: { onClick: () => void }) {
  return (
    <DesktopIcon
      title="about.pdf"
      icon={
        <Image src="/light/desktop/file.svg" alt="file icon" width={500} height={500} />
      }
      onClick={onClick}
    />
  );
}

export function PortfolioIcon({ onClick }: { onClick: () => void }) {
  return (
    <DesktopIcon
      title="portfolio"
      icon={
        <Image
          src="/light/desktop/folder.svg"
          alt="folder icon"
          width={500}
          height={500}
        />
      }
      onClick={onClick}
    />
  );
}

export function StudioIcon({ onClick }: { onClick: () => void }) {
  return (
    <DesktopIcon
      title="studio_"
      icon={
        <Image src="/light/desktop/disc.svg" alt="disc icon" width={500} height={500} />
      }
      onClick={onClick}
    />
  );
}

export function SettingsIcon({ onClick }: { onClick: () => void }) {
  return (
    <DesktopIcon
      title="settings"
      icon={
        <Image
          src="/light/desktop/settings.svg"
          alt="settings icon"
          width={500}
          height={500}
        />
      }
      onClick={onClick}
    />
  );
}

export function HeartIcon({onClick}: {onClick: () => void}) {
  return (
    <DesktopIcon
      title="WYBMV_"
      icon={
        <Image src="/light/desktop/heart.svg" alt="heart icon" width={500} height={500} />
      }
      onClick={onClick}
    />
  );
}

export function TicTacIcon({onClick}: {onClick: () => void}) {
  return (
    <DesktopIcon
      title="tictactoe"
      icon={
        <Image src="/light/desktop/hash.svg" alt="hash icon" width={500} height={500} />
      }
      onClick={onClick}
    />
  );
}
