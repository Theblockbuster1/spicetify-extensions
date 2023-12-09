interface Settings {
  "opacity": number;
  "make-text-white": boolean;
}

type Callback<T extends keyof Settings> = (newValue: Settings[T]) => void | Promise<void>;

class SettingsProvider {
  private static readonly storageKeyPrefix: string = "cover-ambience";

  private static readonly defaultSettings: Settings = {
    "opacity": 1,
    "make-text-white": true,
  };

  private static callbacks: Map<keyof Settings, Callback<any>[]> = new Map();

  public static getSetting<T extends keyof Settings>(settingName: T): Settings[T] {
    const value = localStorage.getItem(`${SettingsProvider.storageKeyPrefix}:${settingName}`);
    if (value == null) {
      return SettingsProvider.defaultSettings[settingName];
    }
    return JSON.parse(value);
  }

  public static setSetting<T extends keyof Settings>(settingName: T, value: Settings[T]): void {
    const callbacks = SettingsProvider.callbacks.get(settingName);
    callbacks?.forEach((callback) => callback(value));

    localStorage.setItem(
      `${SettingsProvider.storageKeyPrefix}:${settingName}`,
      JSON.stringify(value),
    );
  }

  public static subscribeToSetting<T extends keyof Settings>(
    settingName: T,
    callback: Callback<T>,
  ): void {
    if (!SettingsProvider.callbacks.has(settingName)) {
      SettingsProvider.callbacks.set(settingName, []);
    }
    SettingsProvider.callbacks.get(settingName)!.push(callback);
  }
}

export default SettingsProvider;
