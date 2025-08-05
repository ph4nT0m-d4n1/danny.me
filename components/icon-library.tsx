import ThemedIcon from "./icon-themes";
import DesktopIcon from "./desktop-icon";

export function AboutIcon({ onClick }: { onClick: () => void }) {
  return (
    <DesktopIcon
      title="about.pdf"
      icon={
        <ThemedIcon
          light="/light/desktop/file.svg"
          dark="dark/desktop/file.svg"
        />
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
        <ThemedIcon
          light="light/desktop/folder.svg"
          dark="dark/desktop/folder.svg"
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
        <ThemedIcon
          light="light/desktop/disc.svg"
          dark="dark/desktop/disc.svg"
        />
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
        <ThemedIcon
          light="light/desktop/settings.svg"
          dark="dark/desktop/settings.svg"
        />
      }
      onClick={onClick}
    />
  );
}

export function HeartIcon({ onClick }: { onClick: () => void }) {
  return (
    <DesktopIcon
      title="WYBMV_"
      icon={
        <ThemedIcon
          light="light/desktop/heart.svg"
          dark="dark/desktop/heart.svg"
        />
      }
      onClick={onClick}
    />
  );
}

export function TicTacIcon({ onClick }: { onClick: () => void }) {
  return (
    <DesktopIcon
      title="tictactoe"
      icon={
        <ThemedIcon
          light="light/desktop/hash.svg"
          dark="dark/desktop/hash.svg"
        />
      }
      onClick={onClick}
    />
  );
}
