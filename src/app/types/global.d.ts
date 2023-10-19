declare global {
  interface Navigator {
    brave: {
      isBrave(): Promise<boolean>;
    };
  }
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
  }
}

export {};
