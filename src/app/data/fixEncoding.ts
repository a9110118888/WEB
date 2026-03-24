export const fixText = (text: string): string => {
  if (!text) return "";
  let fixed = text;
  const replacements: [RegExp, string][] = [
    [/可實\uFFFD+實現/g, '可實際實現'],
    [/對\uFFFD+結構/g, '對稱結構'],
    [/\uFFFD+保內部/g, '確保內部'],
    [/中\uFFFD+能清楚/g, '中也能清楚'],
    [/環境\uFFFD+的抗浪/g, '環境下的抗浪'],
    [/產\uFFFD+展示/g, '產品展示'],
    [/補\uFFFD+不平均/g, '補得不平均'],
    [/，\uFFFD+成更友善/g, '，達成更友善'],
    [/非\uFFFD+立/g, '非獨立'],
    [/更\uFFFD+面的思考/g, '更全面的思考'],
    [/結構，\uFFFD+環保/g, '結構，既環保'],
    [/更新\uFFFD+此處/g, '更新至此處'],
    [/相呼應\uFFFD+瓶身/g, '相呼應，瓶身'],
    [/產\uFFFD+透過/g, '產品透過'],
    [/列印\uFFFD+試/g, '列印測試'],
    [/在這\uFFFD+專案中/g, '在這次專案中'],
    [/\uFFFD+期調整時/g, '後期調整時'],
    [/文化資\uFFFD+，/g, '文化資產，'],
    [/元素\uFFFD+呈現出/g, '元素，呈現出'],
    [/整理\uFFFD+連結/g, '整理與連結'],
    [/營造出\uFFFD+空交錯/g, '營造出時空交錯'],
    [/可取\uFFFD+的影像/g, '可取得的影像'],
    [/理解\uFFFD+義戲院/g, '理解嘉義戲院'],
    [/「嘉\uFFFD+市老戲院/g, '「嘉義市老戲院'],
    [/紋理\uFFFD+元素/g, '紋理等元素'],
    [/設計\uFFFD+理/g, '設計梳理'],
    [/會\uFFFD+到現實/g, '會受到現實'],
    [/時間\uFFFD+究電影/g, '時間研究電影'],
    [/延伸\uFFFD+用設計/g, '延伸應用設計'],
    [/另外\uFFFD+這次/g, '另外，這次'],
    [/預算\uFFFD+比較/g, '預算也比較'],
    [/全新品\uFFFD+識別/g, '全新品牌識別'],
    [/與\uFFFD+會議題/g, '與社會議題'],
    [/動態\uFFFD+與視覺/g, '動態感與視覺']
  ];
  
  for (const [regex, replacement] of replacements) {
    fixed = fixed.replace(regex, replacement);
  }
  
  // Clean up any remaining invalid characters indiscriminately
  fixed = fixed.replace(/\uFFFD/g, '');
  return fixed;
};

export const fixObject = <T>(obj: T): T => {
  if (typeof obj === 'string') {
    return fixText(obj) as unknown as T;
  }
  if (Array.isArray(obj)) {
    return obj.map(fixObject) as unknown as T;
  }
  if (obj && typeof obj === 'object') {
    const newObj: any = {};
    for (const [key, value] of Object.entries(obj)) {
      newObj[key] = fixObject(value);
    }
    return newObj;
  }
  return obj;
};
