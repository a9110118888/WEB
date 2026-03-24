const fs = require('fs');
const path = '../src/app/data/portfolio.ts';
let content = fs.readFileSync(path, 'utf8');

const replacements = [
  ['可實\uFFFD\uFFFD實現', '可實際實現'],
  ['對\uFFFD\uFFFD結構', '對稱結構'],
  ['\uFFFD\uFFFD保內部', '確保內部'],
  ['中\uFFFD\uFFFD能清楚', '中也能清楚'],
  ['環境\uFFFD\uFFFD的抗浪', '環境下的抗浪'],
  ['產\uFFFD\uFFFD\uFFFD展示', '產品展示'],
  ['補\uFFFD\uFFFD\uFFFD不平均', '補得不平均'],
  ['，\uFFFD\uFFFD\uFFFD成更友善', '，達成更友善'],
  ['非\uFFFD\uFFFD立', '非獨立'],
  ['更\uFFFD\uFFFD\uFFFD面的思考', '更全面的思考'],
  ['結構，\uFFFD\uFFFD\uFFFD環保', '結構，既環保'],
  ['更新\uFFFD\uFFFD\uFFFD此處', '更新至此處'],
  ['相呼應\uFFFD\uFFFD瓶身', '相呼應，瓶身'],
  ['產\uFFFD\uFFFD\uFFFD透過', '產品透過'],
  ['列印\uFFFD\uFFFD\uFFFD試', '列印測試'],
  ['在這\uFFFD\uFFFD專案中', '在這次專案中'],
  ['\uFFFD\uFFFD期調整時', '後期調整時'],
  ['文化資\uFFFD\uFFFD\uFFFD，', '文化資產，'],
  ['元素\uFFFD\uFFFD\uFFFD呈現出', '元素，呈現出'],
  ['整理\uFFFD\uFFFD\uFFFD連結', '整理與連結'],
  ['營造出\uFFFD\uFFFD空交錯', '營造出時空交錯'],
  ['可取\uFFFD\uFFFD的影像', '可取得的影像'],
  ['理解\uFFFD\uFFFD義戲院', '理解嘉義戲院'],
  ['「嘉\uFFFD\uFFFD市老戲院', '「嘉義市老戲院'],
  ['紋理\uFFFD\uFFFD\uFFFD元素', '紋理等元素'],
  ['設計\uFFFD\uFFFD理', '設計梳理'],
  ['會\uFFFD\uFFFD\uFFFD到現實', '會受到現實'],
  ['時間\uFFFD\uFFFD究電影', '時間研究電影'],
  ['延伸\uFFFD\uFFFD\uFFFD用設計', '延伸應用設計'],
  ['另外\uFFFD\uFFFD這次', '另外，這次'],
  ['預算\uFFFD\uFFFD比較', '預算也比較'],
  ['全新品\uFFFD\uFFFD\uFFFD識別', '全新品牌識別'],
  ['與\uFFFD\uFFFD\uFFFD會議題', '與社會議題'],
  ['動態\uFFFD\uFFFD\uFFFD與', '動態感與']
];

let changedCount = 0;
replacements.forEach(([badStr, goodStr]) => {
  // we may have varying numbers of \uFFFD. So let's replace by regex for generic ones
  // Actually, we can just replace all \uFFFD characters if we can uniquely identify the context.
});

// Since \uFFFD is a literal replacement character, let's just do a blanket regex replace based on the context strings:
const regexReplacements = [
  [/可實\uFFFD+實現/g, '可實際實現'],
  [/對\uFFFD+結構/g, '對稱結構'],
  [/\uFFFD+保內部/g, '確保內部'],
  [/中\uFFFD+能清楚/g, '中也能清楚'],
  [/環境\uFFFD+的抗浪/g, '環境下的抗浪'],
  [/產\uFFFD+展示/g, '產品展示'],
  [/補\uFFFD+不平均/g, '補得不平均'],
  [/，\uFFFD+成更友善/g, '，促成更友善'],
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

regexReplacements.forEach(([regex, newStr]) => {
  if (regex.test(content)) {
    content = content.replace(regex, newStr);
    changedCount++;
  } else {
    console.log("NOT FOUND: ", regex);
  }
});

// Any remaining \uFFFD?
const remaining = content.match(/\uFFFD/g);
if (remaining) {
  console.log('Remaining \uFFFD count:', remaining.length);
} else {
  console.log('All \uFFFD cleared!');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Replacements made:', changedCount);
