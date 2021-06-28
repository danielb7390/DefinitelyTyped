export = VoilabPdfTablePluginRowShader;
export as namespace VoilabPdfTablePluginRowShader;

declare namespace VoilabPdfTablePluginRowShader {
  interface VoilabPdfTablePluginRowShaderConf {
    shade1?: string;
    shade2?: string;
    textColor?: string;
    x?: number;
    width?: number;
    offsetHeader?: boolean;
  }
}

interface VoilabPdfTablePluginRowShader {
  // tslint:disable-next-line:no-misused-new no-unnecessary-generics
  new <T>(
    conf: VoilabPdfTablePluginRowShader.VoilabPdfTablePluginRowShaderConf,
  ): VoilabPdfTable.VoilabPdfTablePlugin<T>;
}

declare const VoilabPdfTablePluginRowShader: VoilabPdfTablePluginRowShader;
