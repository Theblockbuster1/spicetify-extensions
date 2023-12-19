import React from "react";

import "./styles/index.scss";

import SettingsProvider from "./modules/settingsProvider";
const { getSetting, subscribeToSetting } = SettingsProvider;
import SettingsModal from "./components/settingsModal";
import {
  ROOT_NOW_PLAYING_BAR_SELECTOR,
  NOW_PLAYING_BAR_SELECTOR,
  NOW_PLAYING_BAR_LEFT_SELECTOR,
  NOW_PLAYING_WIDGET_SELECTOR,
  NOW_PLAYING_WIDGET_TRACK_INFO_SELECTOR,
  LIBRARY_X_SELECTOR,
} from "./constants/selectors";

class Ambience {
  private static ambienceStyle: CSSStyleDeclaration;

  private static rootNowPlayingBar: HTMLDivElement;

  private static nowPlayingWidget: HTMLElement;

  private static nowPlayingBarLeft: HTMLElement;

  private static isLibaryX: boolean;

  private static textStyle?: HTMLStyleElement;

  private static setWidth(): void {
    if (!Ambience.nowPlayingWidget.isConnected) {
      Ambience.initElements();
      return;
    }

    let gradientWidth: number =
      80 + parseFloat(getComputedStyle(Ambience.nowPlayingBarLeft).paddingInlineStart || "0");

    Array.from(Ambience.nowPlayingWidget.children).forEach((child) => {
      if (child instanceof HTMLElement) {
        gradientWidth += child.offsetWidth;
      }
    });

    Ambience.ambienceStyle.width = `${gradientWidth}px`;
  }

  private static async setAmbienceColorAsync(): Promise<void> {
    const { DARK_VIBRANT } = await Spicetify.colorExtractor(Spicetify.Player.data?.item.uri);
    if (DARK_VIBRANT) {
      Ambience.ambienceStyle.backgroundColor = `${DARK_VIBRANT}`;
    }
  }

  private static setAmbienceDimensions(): void {
    const panelGap: number = parseInt(
      getComputedStyle(Ambience.rootNowPlayingBar).getPropertyValue("--panel-gap"),
      10,
    );
    const rootNowPlayingBarHeight =
      Ambience.rootNowPlayingBar.offsetHeight + (Ambience.isLibaryX ? panelGap * 2 : 0);

    Ambience.ambienceStyle.height = `${rootNowPlayingBarHeight}px`;
    if (Ambience.isLibaryX) {
      Ambience.ambienceStyle.marginTop = `-${panelGap}px`;
      Ambience.ambienceStyle.marginLeft = `-${panelGap}px`;
    }
  }

  private static setTextColor(shouldColorToWhite: boolean = getSetting("make-text-white")): void {
    if (shouldColorToWhite) {
      if (!Ambience.textStyle) {
        Ambience.textStyle = document.createElement("style");
        document.head.appendChild(Ambience.textStyle);
      }
      Ambience.textStyle.innerHTML = `
        ${NOW_PLAYING_WIDGET_TRACK_INFO_SELECTOR} *  {
          --text-subdued: white !important;
          --spice-subtext: white !important;
          --spice-text: white !important;
          color: white !important;
        }
      `;
    } else if (Ambience.textStyle) {
      Ambience.textStyle.innerHTML = "";
    }
  }

  private static applyThemeFixes(theme: string = Spicetify.Config.current_theme): void {
    switch (theme.toLowerCase()) {
      case "bloom":
        Ambience.ambienceStyle.marginTop = "";
        Ambience.ambienceStyle.marginLeft = "";
        Ambience.ambienceStyle.height = "100%";
        break;

      case "dribbblish":
        Ambience.ambienceStyle.marginTop = "";
        Ambience.ambienceStyle.marginLeft = "";
        Ambience.ambienceStyle.height = `${getComputedStyle(Ambience.rootNowPlayingBar).height}`;
        break;

      case "comfy":
        if (!Ambience.isLibaryX) {
          Ambience.ambienceStyle.zIndex = "1";
          const nowPlayingBar = document.querySelector(NOW_PLAYING_BAR_SELECTOR);
          if (nowPlayingBar instanceof HTMLElement) {
            nowPlayingBar.style.zIndex = "1";
          }
        }
        break;

      default:
        break;
    }
  }

  private static createAmbience(): void {
    const ambienceGradient: HTMLDivElement = document.createElement("div");
    ambienceGradient.classList.add("ambience-gradient");
    Ambience.ambienceStyle = ambienceGradient.style;
    Ambience.rootNowPlayingBar.insertAdjacentElement("afterbegin", ambienceGradient);
  }

  private static keepTextColor(): void {
    Ambience.setTextColor();
    subscribeToSetting("make-text-white", Ambience.setTextColor);
  }

  private static keepAmbienceOpacity(): void {
    Ambience.ambienceStyle.opacity = `${getSetting("opacity")}%`;
    subscribeToSetting("opacity", (newOpacity) => {
      Ambience.ambienceStyle.opacity = `${newOpacity}%`;
    });
  }

  private static keepAmbienceColor(): void {
    Ambience.setAmbienceColorAsync();
    Spicetify.Player.addEventListener("songchange", Ambience.setAmbienceColorAsync);
  }

  private static keepAmbienceWidth(): void {
    Ambience.setWidth();

    new MutationObserver(Ambience.setWidth).observe(Ambience.nowPlayingBarLeft, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("resize", Ambience.setWidth);
  }

  private static keepAmbienceDimensionsAndFixes(): void {
    Ambience.setAmbienceDimensions();
    Ambience.applyThemeFixes();
    let { current_theme } = Spicetify.Config;

    setInterval(() => {
      if (current_theme !== Spicetify.Config.current_theme) {
        current_theme = Spicetify.Config.current_theme;
        Ambience.setAmbienceDimensions();
        Ambience.applyThemeFixes(current_theme);
      }
    }, 1000);
  }

  private static registerMenu(): void {
    new Spicetify.Menu.Item("Cover Ambience Settings", false, () => {
      Spicetify.PopupModal.display({
        title: "Cover Ambience Settings",
        content: (<SettingsModal />) as unknown as Element,
        isLarge: true,
      });
    }).register();
  }

  private static initElements(): void {
    const rootNowPlayingBar = document.querySelector(ROOT_NOW_PLAYING_BAR_SELECTOR);
    const nowPlayingWidget = document.querySelector(NOW_PLAYING_WIDGET_SELECTOR);
    const nowPlayingBarLeft = document.querySelector(NOW_PLAYING_BAR_LEFT_SELECTOR);
    const libaryXElement = document.querySelector(LIBRARY_X_SELECTOR);

    if (
      !(rootNowPlayingBar instanceof HTMLDivElement) ||
      !(nowPlayingWidget instanceof HTMLElement) ||
      !(nowPlayingBarLeft instanceof HTMLElement)
    ) {
      return;
    }

    Ambience.rootNowPlayingBar = rootNowPlayingBar;
    Ambience.nowPlayingWidget = nowPlayingWidget;
    Ambience.nowPlayingBarLeft = nowPlayingBarLeft;
    Ambience.isLibaryX = Boolean(libaryXElement);
  }

  public static init(): void {
    Ambience.initElements();

    if (
      !Spicetify.Player ||
      !Spicetify.colorExtractor ||
      !Spicetify.Config ||
      !Spicetify.Menu ||
      !Spicetify.PopupModal ||
      !Ambience.rootNowPlayingBar ||
      !Ambience.nowPlayingWidget ||
      !Ambience.nowPlayingBarLeft
    ) {
      setTimeout(Ambience.init, 300);
      return;
    }

    Ambience.createAmbience();
    Ambience.keepTextColor();
    Ambience.keepAmbienceColor();
    Ambience.keepAmbienceWidth();
    Ambience.keepAmbienceDimensionsAndFixes();
    Ambience.keepAmbienceOpacity();
    Ambience.registerMenu();
  }
}

function main() {
  Ambience.init();
}

export default main;
