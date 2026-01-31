const { test, expect } = require('@playwright/test');

const testData = [
    
    { id: 'Pos_Fun_0001', input: 'ammaa', expected: 'අම්මා' },
    { id: 'Neg_Fun_0002', input: 'shree lankaava', expected: 'ශ්‍රී ලංකාව' },
    { id: 'Neg_Fun_0003', input: 'subha dhavasak', expected: 'සුභ දවසක්' },
    { id: 'Neg_Fun_0004', input: 'vidhyaava', expected: 'විද්‍යාව' },
    { id: 'Pos_Fun_0005', input: 'api pansil gamu', expected: 'අපි පන්සිල් ගමු' },
    { id: 'Pos_Fun_0006', input: 'api yamu', expected: 'අපි යමු' },
    { id: 'Pos_Fun_0007', input: 'vathura oona', expected: 'වතුර ඕන' },
    { id: 'Pos_Fun_0008', input: 'theruvan saraNayi', expected: 'තෙරුවන් සරණයි' },

    
    { id: 'Neg_Fun_0009', input: 'mama adha paasal giye nehe', expected: 'මම අද පාසල් ගියේ නැහැ' },
    { id: 'Neg_Fun_0010', input: 'itpm assignment eka karanna ona', expected: 'itpm assignment එක කරන්න ඕන' },
    { id: 'Neg_Fun_0011', input: 'sinhala akuru lassanayi', expected: 'සිංහල අකුරු ලස්සනයි' },
    { id: 'Pos_Fun_0012', input: 'mata kanna puLuvan eeth bonna baehae', expected: 'මට කන්න පුළුවන් ඒත් බොන්න බැහැ' },
    { id: 'Pos_Fun_0013', input: 'oyaath ekka enna mata baehae', expected: 'ඔයාත් එක්ක එන්න මට බැහැ' },
    

    
    { id: 'Pos_Fun_0014', input: '1234567890', expected: '1234567890' },
    { id: 'Pos_Fun_0015', input: 'test@gmail.com', expected: 'test@gmail.com' },
    { id: 'Pos_Fun_0016', input: 'ammaa + thaaththaa', expected: 'අම්මා + තාත්තා' },
    { id: 'Pos_Fun_0017', input: '!!! ??? ...', expected: '!!! ??? ...' },
    { id: 'Pos_Fun_0018', input: '100% kokatath thailaya', expected: '100% කොකටත් තෛලය' },
    { id: 'Pos_Fun_0019', input: '(sinhala typing)', expected: '(sinhala typing)' },

    
    { id: 'Pos_Fun_0020', input: 'mama gedhara yanavaa bye', expected: 'මම ගෙදර යනවා bye' },
    { id: 'Pos_Fun_0021', input: 'poddak wait karanna', expected: 'පොඩ්ඩක් wait කරන්න' }, 
    { id: 'Neg_Fun_0022', input: 'subhama subha aluth avurudhdhak vevaa', expected: 'සුභම සුභ අලුත් අවුරුද්දක් වේවා' },
    { id: 'Pos_Fun_0023', input: 'eeka dhenna', expected: 'ඒක දෙන්න' },
    { id: 'Pos_Fun_0024', input: 'mata ID eka hadhaganna onee', expected: 'මට ID එක හදගන්න ඔනේ' },


    { id: 'Neg_Fun_0025', input: 'mama vada karanavaa, eth ivara nahe.', expected: 'මම වැඩ කරනවා, ඒත් ඉවර නැහැ.' },
    { id: 'Neg_Fun_0026', input: 'api kaama kanna yamu saha bye kiyamu.', expected: 'අපි කෑම කන්න යමු සහ bye කියමු.' },
    { id: 'Pos_Fun_0027', input: 'oyaa enavaanam mama balan innavaa.', expected: 'ඔයා එනවානම් මම බලන් ඉන්නවා.' },
    { id: 'Neg_Fun_0028', input: 'vaessa nisaa adha match eka nehe.', expected: 'වැස්ස නිසා අද match එක නැහැ.' },
    
    

    { id: 'Pos_Fun_0029', input: 'Mama Havasata campus ekata yanavaa.', expected: 'මම හවසට campus එකට යනවා.' },
    { id: 'Pos_Fun_0030', input: 'oyaa havasata handhiyata enavanam, mamath ennam.', expected: 'ඔයා හවසට හන්දියට එනවනම්, මමත් එන්නම්.' },
    { id: 'Pos_Fun_0031', input: 'ammaa heta kiribath hadhanava kivvaa.', expected: 'අම්මා හෙට කිරිබත් හදනව කිව්වා.' },
    { id: 'Pos_Fun_0032', input: 'api heta nuvara yamu.', expected: 'අපි හෙට නුවර යමු.' },
    { id: 'Pos_Fun_0033', input: 'oyata onenam mama heta potha genath dhennam.', expected: 'ඔයට ඔනෙනම් මම හෙට පොත ගෙනත් දෙන්නම්.' },

    { id: 'Pos_Fun_0034', input: 'maarga sQQvarDhana vapasariya nisaa vaahanakaruvaa gQQvathura saha naayayaeem piLibaDHA vaedi avaDhaanayakin sitina lesa polisiya dhaenum dheyi.', expected: 'මාර්ග සංවර්ධන වපසරිය නිසා වාහනකරුවා ගංවතුර සහ නායයෑම් පිළිබඳ වැඩි අවධානයකින් සිටින ලෙස පොලිසිය දැනුම් දෙයි.' },
    { id: 'Pos_Fun_0035', input: 'dhaedi vaessa saha suLaGA nisaa maarga thadhabadhaya aethi vii aethi athara, viviDha pradheesha vala vidhuliya bindha vaetii aethi bava vaarthaa vee.', expected: 'දැඩි වැස්ස සහ සුළඟ නිසා මාර්ග තදබදය ඇති වී ඇති අතර, විවිධ ප්‍රදේශ වල විදුලිය බින්ද වැටී ඇති බව වාර්තා වේ.' },
];


test.describe('Singlish to Sinhala Automation Suite', () => {
    
    for (const data of testData) {
        test(`Test Case ${data.id}: ${data.input}`, async ({ page }) => {
            test.setTimeout(60000);
            await page.goto('https://www.swifttranslator.com/');

            // Input
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            await inputArea.fill(data.input);
            await page.keyboard.press('Space');

            
            const outputArea = page.locator('div:has-text("Sinhala") + div.bg-slate-50, div.bg-slate-50').last();

            
            await expect(outputArea).not.toBeEmpty({ timeout: 20000 });

            
            const rawText = await outputArea.innerText();
            
            
            const cleanedActual = rawText.split('\n')[0].trim();

            console.log(`[${data.id}] Input: ${data.input}`);
            console.log(`     - Expected: ${data.expected}`);
            console.log(`     - Actual  : ${cleanedActual}`);

            
            expect.soft(cleanedActual).toContain(data.expected);
            
            if (cleanedActual.includes(data.expected)) {
                console.log(`     - Result  :  PASS`);
            } else {
                console.log(`     - Result  :  FAIL (Mismatch)`);
            }
        });
    }
});