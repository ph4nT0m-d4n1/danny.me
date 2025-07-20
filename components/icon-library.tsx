import Image from "next/image";
import DesktopIcon from "./desktop-icon";

export function AboutIcon({ onClick }: { onClick: () => void }) {
  return (
    <DesktopIcon
      title="about.pdf"
      icon={
        <Image src="/light/file.svg" alt="file icon" width={500} height={500} />
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
          src="/light/folder.svg"
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
        <Image src="/light/disc.svg" alt="disc icon" width={500} height={500} />
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
          src="/light/settings.svg"
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
        <Image src="/light/heart.svg" alt="heart icon" width={500} height={500} />
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
        <Image src="/light/hash.svg" alt="hash icon" width={500} height={500} />
      }
      onClick={onClick}
    />
  );
}
