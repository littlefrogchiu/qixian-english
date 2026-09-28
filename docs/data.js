// 七賢英語閱讀・文法・對戰 —— 12 單元教材資料
// 每單元：課次範圍、文法範圍、文章、閱讀測驗 1 題、重點文法 3 則（各附 1 題）、
// 對戰題庫 battle.text（出自文章）與 battle.apply（單元字詞應用）。
// 對戰題的選項陣列 o：第一個為正解，顯示時會隨機排列。

window.UNITS = [
/* ───────────── 1 ───────────── */
{
  id: 1, book: '七上', lessons: 'GR・L1・L2', level: 'C',
  grammarScope: '人稱代名詞主格／所有格、數字與年齡、be 動詞單複數句、形容詞、Who / What 問答',
  title: 'Nice to Meet You!', genre: '自我介紹',
  article: [
    "Hi! My name is Kevin. I'm thirteen years old, and I'm a junior high school student at Qixian. Nice to meet you!",
    "This is a picture of my warm family. My dad is a cook, and my mom is a nurse. My uncle is a farmer, and his wife is a doctor. My aunt is young and beautiful, and her husband is tall and handsome. Who is the cute boy? He's their son, my cousin Leo. How old is he? He's only one year old.",
    "Leo and I are different in size, but our animal sign is the same. What's our animal sign? We're snakes! What about our PE teacher, Mr. Lin? He's a tiger. No wonder he's strict and energetic!"
  ],
  reading: {
    type: '主旨・標題',
    q: 'What is the best title for the reading?',
    o: ['Kevin, His Family, and Their Animal Signs', 'The Animals in the Zoo', 'Our Strict PE Teacher', 'A Snake in the Classroom'],
    a: 0,
    ex: '全文由 Kevin 自我介紹、介紹家人，再談到生肖，(A) 最能涵蓋全文；(C) 只是最後一小段的細節。'
  },
  grammar: [
    { t: '人稱代名詞：主格 vs. 所有格',
      d: '主格當主詞放句首：I / you / he / she / it / we / they。所有格後面一定接名詞：my / your / his / her / its / our / their。',
      ex: ['<b>He</b> is my cousin.（主格）', 'My uncle is a farmer, and <b>his</b> wife is a doctor.（所有格＋名詞）'],
      q: 'Mr. and Mrs. Lin are nice. ______ son is a doctor.', o: ['They', 'His', 'Their', 'Her'], a: 2,
      why: '空格後接名詞 son，要用所有格；Mr. and Mrs. Lin 是兩個人，用 Their。' },
    { t: 'be 動詞：am / is / are 與單複數',
      d: 'I → am；he / she / it／單數名詞 → is；you / we / they／複數名詞 → are。A and B 當主詞是複數。',
      ex: ['My dad <b>is</b> a cook.', 'Leo and I <b>are</b> different in size.'],
      q: 'My uncle and his wife ______ farmers.', o: ['am', 'is', 'be', 'are'], a: 3,
      why: 'My uncle and his wife 是兩個人（複數），be 動詞用 are。' },
    { t: 'Who / What 問句（含 How old 問年齡）',
      d: 'Who 問「人是誰」；What 問「東西、名字、是什麼」；How old 問年齡 → I\'m / He\'s … years old。',
      ex: ['<b>Who</b> is the cute boy? — He\'s their son.', '<b>How old</b> is he? — He\'s only one year old.'],
      q: 'A: ______ is the girl in the picture?  B: She\'s my cousin, Amy.', o: ['What', 'Who', 'How old', 'What animal'], a: 1,
      why: '回答是「她是我表妹 Amy」，在問人是誰，用 Who。' }
  ],
  battle: {
    text: [
      { q: 'My dad is a cook, and my mom is a ______.（護士）', o: ['nurse', 'doctor', 'farmer', 'cook'] },
      { q: 'This is a picture of my ______ family.（溫暖的）', o: ['warm', 'strict', 'cute', 'young'] },
      { q: 'My uncle is a farmer, and his ______ is a doctor.（妻子）', o: ['wife', 'husband', 'son', 'aunt'] },
      { q: 'My aunt is young and beautiful, and her ______ is tall and handsome.（丈夫）', o: ['husband', 'wife', 'daughter', 'parent'] },
      { q: 'He\'s their son, my ______ Leo.（堂／表兄弟）', o: ['cousin', 'uncle', 'daughter', 'parent'] },
      { q: 'Leo and I are different in ______.（體型）', o: ['size', 'class', 'news', 'picture'] },
      { q: 'What\'s our animal ______? We\'re snakes!（生肖）', o: ['sign', 'size', 'class', 'problem'] },
      { q: 'No ______ he\'s strict and energetic!（難怪）', o: ['wonder', 'problem', 'news', 'size'] }
    ],
    apply: [
      { q: 'Mr. Wang is my dad\'s brother. He is my ______.', o: ['uncle', 'aunt', 'cousin', 'son'] },
      { q: 'A: What\'s ______ animal sign?  B: They\'re dragons.', o: ['their', 'they', 'our', 'his'] },
      { q: 'Ms. Chen is my mom\'s sister. She is my ______.', o: ['aunt', 'uncle', 'wife', 'daughter'] }
    ]
  }
},
/* ───────────── 2 ───────────── */
{
  id: 2, book: '七上', lessons: 'L3・L4', level: 'C',
  grammarScope: 'Where 問答、祈使句、受格、助動詞 can',
  title: 'Welcome to Qixian!', genre: '校園導覽・安全守則',
  article: [
    "Guess what? Our school is in Gushan, Kaohsiung. Where is it? It's near the Kaohsiung Museum of Fine Arts.",
    "On your way to school, please watch out. Stop in front of the crosswalk and look at the traffic lights. Don't cross the road on a red light. Don't talk on your smartphone on the sidewalk, and don't listen to songs all the time. Watch out for oncoming cars!",
    "In the museum, you can take photos with your friends, but you can't make any noise. Please don't be noisy. Wait for Ms. Lin and listen to her. She can talk about the special design of the museum. Let's check it out!"
  ],
  reading: {
    type: '主旨大意',
    q: 'What is the reading mainly about?',
    o: ['How to design a museum', 'Where our school is and some rules for the road and the museum', 'Why students can\'t use smartphones at school', 'How to take good photos in the museum'],
    a: 1,
    ex: '第一段講學校位置，第二段是上學路上的安全規則，第三段是美術館的規矩，(B) 涵蓋全文。'
  },
  grammar: [
    { t: 'Where 問答與位置介系詞',
      d: 'Where is / are + 主詞？回答 It\'s / They\'re + 位置：in、near、next to、between A and B、in front of、behind、beside。',
      ex: ['<b>Where</b> is it? — It\'s <b>near</b> the Kaohsiung Museum of Fine Arts.'],
      q: 'A: ______ is your smartphone?  B: It\'s between the bag and the book.', o: ['What', 'Who', 'How old', 'Where'], a: 3,
      why: '回答的是位置（between…），用 Where 問。' },
    { t: '祈使句：Please / Don\'t / Let\'s + 原形動詞',
      d: '祈使句省略主詞 you，動詞用原形。否定：Don\'t + 原形；提議：Let\'s + 原形；加 please 更有禮貌。be 動詞的祈使句用 Be / Don\'t be。',
      ex: ['<b>Don\'t cross</b> the road on a red light.', '<b>Don\'t be</b> late.', '<b>Let\'s check</b> it out!'],
      q: '______ make any noise in the museum.', o: ['Don\'t', 'Not', 'Isn\'t', 'Aren\'t'], a: 0,
      why: '否定祈使句用 Don\'t + 原形動詞。' },
    { t: '助動詞 can ＋ 原形動詞；受格代名詞',
      d: 'can / can\'t 後面接原形動詞，主詞是第三人稱也不加 s。動詞或介系詞後面的代名詞用受格：me / you / him / her / it / us / them。',
      ex: ['You <b>can take</b> photos, but you <b>can\'t make</b> any noise.', 'Wait for Ms. Lin and listen to <b>her</b>.'],
      q: 'Ms. Lin is here. You can ______ to her.', o: ['talks', 'talking', 'talk', 'is talk'], a: 2,
      why: 'can 後面接原形動詞 talk；介系詞 to 後面用受格 her。' }
  ],
  battle: {
    text: [
      { q: 'It\'s ______ the Kaohsiung Museum of Fine Arts.（在…附近）', o: ['near', 'behind', 'between', 'inside'] },
      { q: 'Stop in front of the ______ and look at the traffic lights.（斑馬線）', o: ['crosswalk', 'sidewalk', 'ground', 'lane'] },
      { q: 'Don\'t ______ the road on a red light.（穿越）', o: ['cross', 'check', 'make', 'wait'] },
      { q: 'On your way to school, please ______ out.（小心）', o: ['watch', 'check', 'stand', 'sit'] },
      { q: 'You can take photos, but you can\'t make any ______.（噪音）', o: ['noise', 'voice', 'song', 'idea'] },
      { q: 'She can talk about the special ______ of the museum.（設計）', o: ['design', 'style', 'theme', 'user'] },
      { q: 'Watch out for ______ cars!（迎面而來的）', o: ['oncoming', 'expensive', 'quiet', 'real'] },
      { q: 'Please don\'t be ______.（吵鬧的）', o: ['noisy', 'early', 'real', 'soft'] }
    ],
    apply: [
      { q: 'It\'s late. Let\'s be ______. Dad is in the bedroom.', o: ['quiet', 'noisy', 'late', 'real'] },
      { q: 'Please get some ice from the ______.', o: ['kitchen', 'bathroom', 'bedroom', 'sidewalk'] },
      { q: 'Don\'t talk on your ______ on the road. Watch out!', o: ['smartphone', 'blanket', 'kitchen', 'tool'] }
    ]
  }
},
/* ───────────── 3 ───────────── */
{
  id: 3, book: '七上', lessons: 'L5・L6', level: 'C',
  grammarScope: '現在進行式、What time / What day 問答、There is / are',
  title: 'A Surprise After School', genre: '校園記敘',
  article: [
    "It's Friday afternoon. There are a lot of students on the sports field and the basketball court after school, and the sun is still shining.",
    "What is the Qixian basketball team doing? The girls are preparing a party in their classroom. They're putting sandwiches and a big cake on the table. Today is Mr. Chen's birthday! He's the team's teacher.",
    "Where are the boys? They're working out with Mr. Chen in the gym. What time is it now? It's six p.m., and everyone is hungry. The boys are showing Mr. Chen around the building, and they're walking to the classroom. \"Happy birthday!\" everyone is saying. Mr. Chen is strict. However, he's also friendly. The team is a big, warm family."
  ],
  reading: {
    type: '主旨・標題',
    q: 'What is the best title for the reading?',
    o: ['A Basketball Game on Friday', 'Sandwiches on the Sports Field', 'A Birthday Party for Mr. Chen', 'A Day in the Library'],
    a: 2,
    ex: '女生在準備派對、男生把陳老師帶到教室，整篇都圍繞陳老師的生日驚喜。'
  },
  grammar: [
    { t: '現在進行式：be 動詞 ＋ V-ing',
      d: '表示「此刻正在做」。常搭配 now、Look!、Listen!。動詞變化：put → putting、shine → shining、work → working。',
      ex: ['The sun <b>is</b> still <b>shining</b>.', 'They<b>\'re putting</b> sandwiches on the table.'],
      q: 'Look! The girls ______ sandwiches on the table.', o: ['are putting', 'put', 'is putting', 'putting'], a: 0,
      why: 'Look! 表示正在發生；主詞 The girls 複數 → are putting（put 重複 t 再加 ing）。' },
    { t: 'What time / What day 問答',
      d: 'What time is it? → It\'s six o\'clock / six p.m.（問幾點）；What day is it today? → It\'s Friday.（問星期幾）',
      ex: ['<b>What time</b> is it now? — It\'s six p.m.'],
      q: 'A: ______ is it today?  B: It\'s Friday.', o: ['What time', 'What day', 'Where', 'Who'], a: 1,
      why: '回答星期五，要問星期幾：What day。' },
    { t: 'There is / There are（有…）',
      d: 'There is ＋ 單數名詞；There are ＋ 複數名詞，表示「某處有…」。疑問句把 is / are 放句首：Is there…? / Are there…?',
      ex: ['<b>There are</b> a lot of students on the sports field.'],
      q: 'There ______ two basketball courts next to the gym.', o: ['is', 'am', 'be', 'are'], a: 3,
      why: 'two basketball courts 是複數，用 There are。' }
  ],
  battle: {
    text: [
      { q: 'The sun is still ______.（照耀）', o: ['shining', 'rising', 'saying', 'finding'] },
      { q: 'There are a lot of students on the sports ______.（運動場）', o: ['field', 'court', 'gym', 'garden'] },
      { q: 'The girls are ______ a party in their classroom.（準備）', o: ['preparing', 'looking', 'working', 'worrying'] },
      { q: 'They\'re putting ______ and a big cake on the table.（三明治）', o: ['sandwiches', 'baskets', 'shelves', 'swings'] },
      { q: 'The boys are working ______ with Mr. Chen in the gym.（健身、運動）', o: ['out', 'up', 'for', 'around'] },
      { q: 'The boys are showing Mr. Chen ______ the building.（到處）', o: ['around', 'out', 'up', 'for'] },
      { q: 'It\'s six p.m., and everyone is ______.（飢餓的）', o: ['hungry', 'large', 'still', 'outside'] },
      { q: 'Mr. Chen is strict. ______, he\'s also friendly.（然而）', o: ['However', 'By the way', 'Hurry up', 'Still'] }
    ],
    apply: [
      { q: 'It\'s twelve o\'clock. It\'s ______. Let\'s eat lunch!', o: ['noon', 'tonight', 'weekend', 'week'] },
      { q: 'A: What day is it today?  B: It\'s ______.', o: ['Saturday', 'six o\'clock', 'tonight', 'a.m.'] },
      { q: 'Look! The kids ______ on the swings.', o: ['are playing', 'playing', 'is playing', 'play are'] }
    ]
  }
},
/* ───────────── 4 ───────────── */
{
  id: 4, book: '七下', lessons: 'GR・L1・L2', level: 'C→B',
  grammarScope: '現在簡單式、頻率副詞、How often',
  title: 'A Day in Jay\'s Life', genre: '人物側寫',
  article: [
    "Jay is in the ninth grade. He's a player on the Qixian basketball team. He usually gets up at 5:30 a.m. He washes his face, brushes his teeth, and eats breakfast fast. Then he practices basketball with his team every morning. After school, they practice together again for two hours.",
    "How often does Jay play video games? He seldom plays them. He knows he must study hard for tests. On weekends, he often helps his mom with the housework. He mops the dirty floor, does the dishes, and takes out the trash.",
    "The team has a game once or twice a month. Jay says, \"We sometimes lose, but we always have fun!\""
  ],
  reading: {
    type: '細節理解',
    q: 'Which is TRUE about Jay?',
    o: ['He often plays video games at night.', 'He never helps with the housework.', 'His team always wins.', 'He practices basketball twice a day.'],
    a: 3,
    ex: '文中說他每天早上練球，放學後又練兩小時 → 一天練兩次。(A)(B)(C) 都與文意相反。'
  },
  grammar: [
    { t: '現在簡單式：第三人稱單數動詞加 -s / -es',
      d: '表示習慣或經常發生的事。主詞是 he / she / it／單數名詞時，動詞加 s；字尾 s, sh, ch, x, o 加 es（wash → washes、do → does）；子音 + y 改 ies（study → studies）；have → has。',
      ex: ['He <b>washes</b> his face and <b>brushes</b> his teeth.', 'The team <b>has</b> a game once or twice a month.'],
      q: 'Jay ______ his teeth every morning.', o: ['brush', 'brushes', 'brushs', 'brushing'], a: 1,
      why: 'Jay 是第三人稱單數，brush 字尾 sh → brushes。' },
    { t: '頻率副詞的位置',
      d: 'always > usually > often > sometimes > seldom > never。放在 be 動詞／助動詞之後、一般動詞之前。',
      ex: ['He <b>seldom plays</b> video games.', 'We <b>sometimes lose</b>, but we <b>always have</b> fun!'],
      q: 'Which sentence is correct?', o: ['Jay plays seldom video games.', 'Jay always is late.', 'Jay seldom plays video games.', 'Jay is never do his homework.'], a: 2,
      why: '頻率副詞放在一般動詞 plays 之前；be 動詞則放在 is 之後（Jay is always late）。' },
    { t: 'How often…? 問頻率',
      d: 'How often do / does + 主詞 + 原形動詞？回答：once / twice / three times + a day / week / month，或 every day、often…',
      ex: ['<b>How often does</b> Jay <b>play</b> video games? — He seldom plays them.'],
      q: 'A: ______ does the team have a game?  B: About twice a month.', o: ['How often', 'How much', 'What time', 'Where'], a: 0,
      why: '回答「一個月兩次」是頻率，用 How often。' }
  ],
  battle: {
    text: [
      { q: 'He usually ______ up at 5:30 a.m.（起床）', o: ['gets', 'sits', 'looks', 'stands'] },
      { q: 'He washes his face and brushes his ______.（牙齒）', o: ['teeth', 'face', 'finger', 'floor'] },
      { q: 'Then he ______ basketball with his team every morning.（練習）', o: ['practices', 'studies', 'enjoys', 'answers'] },
      { q: 'He ______ plays video games.（很少）', o: ['seldom', 'always', 'often', 'usually'] },
      { q: 'He knows he ______ study hard for tests.（必須）', o: ['must', 'either', 'every', 'then'] },
      { q: 'He mops the dirty ______ and takes out the trash.（地板）', o: ['floor', 'street', 'market', 'place'] },
      { q: 'On weekends, he often helps his mom with the ______.（家事）', o: ['housework', 'homework', 'habit', 'breakfast'] },
      { q: '"We sometimes ______, but we always have fun!"（輸）', o: ['lose', 'win', 'hit', 'touch'] }
    ],
    apply: [
      { q: 'A: ______ do you exercise?  B: Three times a week.', o: ['How often', 'How much', 'What time', 'Where'] },
      { q: 'Kevin never ______ his homework late.', o: ['does', 'do', 'doing', 'is do'] },
      { q: 'The toilet seat is ______. There are a lot of germs on it.', o: ['dirty', 'clean', 'fast', 'sure'] }
    ]
  }
},
/* ───────────── 5 ───────────── */
{
  id: 5, book: '七下', lessons: 'L3・L4', level: 'C→B',
  grammarScope: 'What date / When 問日期、Whose 與所有格代名詞、How many / much、Which',
  title: 'Pancakes for the School Fair', genre: '書信・通知',
  article: [
    "Dear classmates,",
    "When is the school fair? It's on Saturday, December 5th. Our class is making pancakes, and we need your help! How much flour do we need? About two kilograms. How many eggs? Thirty. We also need a few bottles of milk and a little sugar.",
    "Is it difficult? Of course not! My mom can teach us. First, mix the flour, eggs, and milk. Then heat a pan and add some butter. Cook the batter until it's round and brown. It's ready!",
    "Whose pans can we use? Amy's and mine. Which do you like on your pancakes, sugar or butter? Both are yummy! Please give your answer to me by Friday.",
    "Love, Ben"
  ],
  reading: {
    type: '細節理解（NOT 題）',
    q: 'Which is NOT on Ben\'s list for the pancakes?',
    o: ['Rice.', 'Flour.', 'Eggs.', 'Milk.'],
    a: 0,
    ex: '信中提到 flour、eggs、milk、sugar、butter，沒有 rice。'
  },
  grammar: [
    { t: 'When / What date 問日期',
      d: 'When is…? 問「什麼時候」；What date is it today? 問「幾月幾日」。回答日期用 on：on December 5th（序數 first, second, third, fifth…）。',
      ex: ['<b>When</b> is the school fair? — It\'s <b>on</b> Saturday, December 5th.'],
      q: 'A: ______ is the school fair?  B: It\'s on December 5th.', o: ['Whose', 'Which', 'When', 'How many'], a: 2,
      why: '回答是日期，用 When 問「什麼時候」。' },
    { t: 'Whose 與所有格代名詞',
      d: 'Whose + 名詞 問「誰的」。所有格代名詞 = 所有格 + 名詞：mine / yours / his / hers / ours / theirs，後面不再接名詞。',
      ex: ['<b>Whose</b> pans can we use? — Amy\'s and <b>mine</b>.'],
      q: 'A: Whose bottle is this?  B: It\'s ______. My name is on it.', o: ['my', 'me', 'I', 'mine'], a: 3,
      why: '空格後沒有名詞，用所有格代名詞 mine（= my bottle）。' },
    { t: 'How many / How much、Which',
      d: 'How many + 可數複數名詞（eggs）；How much + 不可數名詞（flour, sugar, milk）。Which 用在有範圍的選擇：Which…, A or B?',
      ex: ['<b>How much</b> flour…? <b>How many</b> eggs?', '<b>Which</b> do you like, sugar or butter?'],
      q: 'How ______ sugar do we need?', o: ['many', 'much', 'often', 'old'], a: 1,
      why: 'sugar 是不可數名詞，用 How much。' }
  ],
  battle: {
    text: [
      { q: 'Our class is making ______ for the school fair.（鬆餅）', o: ['pancakes', 'pies', 'noodles', 'rice'] },
      { q: 'How much ______ do we need? About two kilograms.（麵粉）', o: ['flour', 'sugar', 'salt', 'water'] },
      { q: 'Heat a ______ and add some butter.（平底鍋）', o: ['pan', 'plate', 'bowl', 'glass'] },
      { q: 'Cook the ______ until it\'s round and brown.（麵糊）', o: ['batter', 'butter', 'bottle', 'flour'] },
      { q: '______ are yummy!（兩者都）', o: ['Both', 'Which', 'Enough', 'Whose'] },
      { q: 'We also need a ______ bottles of milk.（一些，少數幾個）', o: ['few', 'little', 'much', 'lot'] },
      { q: 'Is it ______? Of course not!（困難的）', o: ['difficult', 'delicious', 'ready', 'busy'] },
      { q: 'Cook the batter ______ it\'s round and brown.（直到）', o: ['until', 'which', 'when', 'both'] }
    ],
    apply: [
      { q: 'A: ______ glasses of water do you need?  B: Two, please.', o: ['How many', 'How much', 'Which', 'Whose'] },
      { q: 'A: ______ do you want, the pie or the cake?  B: The pie, please.', o: ['Which', 'When', 'Whose', 'How much'] },
      { q: 'Christmas is in ______.', o: ['December', 'April', 'July', 'October'] }
    ]
  }
},
/* ───────────── 6 ───────────── */
{
  id: 6, book: '七下', lessons: 'L5・L6', level: 'C→B',
  grammarScope: 'be 動詞過去式、規則動詞過去式、不規則動詞過去式',
  title: 'A Trip to the Art Museum', genre: '日記・遊記',
  article: [
    "Last Saturday, our class visited the Kaohsiung Museum of Fine Arts. It's just ten minutes from Qixian, so we walked there. The art in the museum was amazing. Ms. Lin explained the stories of the pictures to us, and we learned a lot.",
    "Then we had lunch next to the pond in the park. Everyone brought snacks, and we shared them. Some kids played hide-and-seek behind the trees. Ben was lazy. He didn't play with us. He even surfed the Internet on his phone for an hour.",
    "Later, we collected our plastic bottles and threw them away. We kept the park clean. In the end, everyone was tired but happy. It was an amazing day!"
  ],
  reading: {
    type: '細節理解（換句話說）',
    q: 'What did Ben do in the park?',
    o: ['He played hide-and-seek.', 'He used his phone.', 'He explained the pictures.', 'He collected the bottles.'],
    a: 1,
    ex: '原文 He even surfed the Internet on his phone → 換句話說就是 He used his phone。'
  },
  grammar: [
    { t: 'be 動詞過去式：was / were',
      d: 'I / he / she / it／單數 → was；you / we / they／複數 → were。否定 wasn\'t / weren\'t。',
      ex: ['The art in the museum <b>was</b> amazing.', 'Everyone <b>was</b> tired but happy.（everyone 視為單數）'],
      q: 'The kids ______ very happy in the park yesterday.', o: ['are', 'was', 'is', 'were'], a: 3,
      why: 'yesterday → 過去式；The kids 複數 → were。' },
    { t: '規則動詞過去式：-ed 的拼法',
      d: '一般加 ed（visit → visited）；字尾 e 加 d（share → shared）；子音 + y 改 ied（study → studied）；短母音 + 單子音重複字尾（stop → stopped）。否定：didn\'t + 原形。',
      ex: ['Our class <b>visited</b> the museum.', 'He <b>didn\'t play</b> with us.'],
      q: 'The bus ______ in front of the museum yesterday.', o: ['stopped', 'stoped', 'stoping', 'stops'], a: 0,
      why: 'stop 是「短母音 + 單子音」，重複 p 再加 ed → stopped。' },
    { t: '不規則動詞過去式',
      d: '要一個一個背：have → had、keep → kept、throw → threw、bring → brought、buy → bought、swim → swam、begin → began。',
      ex: ['Everyone <b>brought</b> snacks.', 'We <b>threw</b> them away.'],
      q: 'After lunch yesterday, we ______ our trash away.', o: ['throwed', 'throw', 'threw', 'throws'], a: 2,
      why: 'throw 是不規則動詞，過去式為 threw。' }
  ],
  battle: {
    text: [
      { q: 'Last Saturday, our class ______ the Kaohsiung Museum of Fine Arts.（參觀）', o: ['visited', 'visit', 'visits', 'visiting'] },
      { q: 'Ms. Lin ______ the stories of the pictures to us.（解釋）', o: ['explained', 'climbed', 'collected', 'hunted'] },
      { q: 'Everyone ______ snacks, and we shared them.（帶來）', o: ['brought', 'bought', 'kept', 'began'] },
      { q: 'Ben was ______. He didn\'t play with us.（懶惰的）', o: ['lazy', 'wise', 'poor', 'bright'] },
      { q: 'He even ______ the Internet on his phone for an hour.（上網）', o: ['surfed', 'swam', 'hiked', 'started'] },
      { q: 'We collected our plastic bottles and ______ them away.（丟掉）', o: ['threw', 'kept', 'bought', 'brought'] },
      { q: 'Then we had lunch next to the ______ in the park.（池塘）', o: ['pond', 'beach', 'island', 'mountain'] },
      { q: 'In the ______, everyone was tired but happy.（最後）', o: ['end', 'half', 'kind', 'law'] }
    ],
    apply: [
      { q: 'We ______ a lot of fun at the beach yesterday.', o: ['had', 'have', 'has', 'having'] },
      { q: 'Two days ______, I swam in the river with my brother.', o: ['ago', 'before', 'later', 'yesterday'] },
      { q: 'My grandpa ______ me a big suitcase last month.', o: ['bought', 'buys', 'buy', 'buying'] }
    ]
  }
},
/* ───────────── 7 ───────────── */
{
  id: 7, book: '八上', lessons: 'L1・L2', level: 'B',
  grammarScope: '天氣問答、授與動詞、連接詞 because / so',
  title: 'Under the Weather', genre: '記敘・訊息',
  article: [
    "How's the weather in Kaohsiung? Summer is a long season here. It's usually hot and sunny, and the air is wet. But in the afternoon, the sky sometimes becomes dark, and heavy showers come fast. Rainy afternoons are common, so many Qixian students always bring umbrellas to school.",
    "Last Tuesday, Amy forgot her umbrella. She walked home in the rain after basketball practice, so her hair and clothes were all wet. The next morning, she felt under the weather. Her head hurt, and she had a fever and a sore throat. Her mom made some hot soup for her and gave her some medicine.",
    "Amy called her coach, Mr. Chen, and said, \"I'm sick because I caught a cold. Can I stay home today?\" Mr. Chen sent her a message: \"Too bad! Stay home and rest. Health comes first.\"",
    "Now Amy always puts an umbrella and a coat in her bag."
  ],
  reading: {
    type: '因果推論',
    q: 'Why did Amy call Mr. Chen?',
    o: ['She wanted an umbrella from him.', 'She wanted to give him some medicine.', 'She was sick and wanted to stay home.', 'She forgot the weather report.'],
    a: 2,
    ex: 'Amy 說 I\'m sick… Can I stay home today? 可知她生病想請假在家休息。'
  },
  grammar: [
    { t: '天氣問答',
      d: 'How\'s the weather…? = What\'s the weather like…? 回答：It\'s sunny / rainy / cloudy / windy / hot / cold。',
      ex: ['<b>How\'s the weather</b> in Kaohsiung? — It\'s usually hot and sunny.'],
      q: 'A: ______ the weather in Kaohsiung today?  B: It\'s sunny and hot.', o: ['How\'s', 'What\'s', 'Why\'s', 'Who\'s'], a: 0,
      why: '問天氣用 How\'s the weather…?（What\'s 要搭配 like：What\'s the weather like?）' },
    { t: '授與動詞：V ＋ 人 ＋ 物 ＝ V ＋ 物 ＋ to / for ＋ 人',
      d: 'give / send / show / tell / pass 用 to；buy / make / cook / get 用 for。',
      ex: ['Mr. Chen <b>sent her</b> a message.', 'Her mom <b>made</b> some hot soup <b>for</b> her.'],
      q: 'Mom made some soup ______ Amy.', o: ['to', 'for', 'at', 'of'], a: 1,
      why: 'make 移位後用 for：make something for someone。' },
    { t: '連接詞 because / so',
      d: 'because 接「原因」，so 接「結果」。because 和 so 不能同時出現在一個句子裡。',
      ex: ['I\'m sick <b>because</b> I caught a cold.', 'She walked home in the rain, <b>so</b> her hair was wet.'],
      q: 'Amy forgot her umbrella, ______ she got wet.', o: ['because', 'but', 'or', 'so'], a: 3,
      why: '「沒帶傘」是原因，「淋濕」是結果，結果前用 so。' }
  ],
  battle: {
    text: [
      { q: 'Summer is a long ______ here.（季節）', o: ['season', 'weather', 'nature', 'country'] },
      { q: 'It\'s usually hot and ______.（晴朗的）', o: ['sunny', 'rainy', 'snowy', 'windy'] },
      { q: 'Heavy ______ come fast in the afternoon.（陣雨）', o: ['showers', 'seasons', 'masks', 'messages'] },
      { q: 'Last Tuesday, Amy ______ her umbrella.（忘記）', o: ['forgot', 'felt', 'sent', 'caught'] },
      { q: 'The next morning, she felt under the ______.（身體不適）', o: ['weather', 'water', 'air', 'sky'] },
      { q: 'She had a fever and a sore ______.（喉嚨）', o: ['throat', 'neck', 'stomach', 'head'] },
      { q: 'Mr. Chen ______ her a message.（傳送）', o: ['sent', 'spoke', 'hurt', 'treated'] },
      { q: 'Her mom gave her some ______.（藥）', o: ['medicine', 'mask', 'coat', 'fever'] }
    ],
    apply: [
      { q: 'Ben has a fever, ______ he can\'t go to school today.', o: ['so', 'because', 'but', 'or'] },
      { q: 'A: ______ is the weather in Taipei?  B: It\'s cold and rainy.', o: ['How', 'What', 'Who', 'Why'] },
      { q: 'My aunt bought a new coat ______ me.', o: ['for', 'to', 'of', 'with'] }
    ]
  }
},
/* ───────────── 8 ───────────── */
{
  id: 8, book: '八上', lessons: 'L3・L4', level: 'B',
  grammarScope: 'when / before / after、過去進行式、不定詞、動名詞、虛主詞 it',
  title: 'My Dream', genre: '個人記敘',
  article: [
    "When I was in elementary school, I wanted to be a singer. I played the guitar and the drum. But one day, everything changed. I was walking past the Qixian gym when I saw a basketball game. The players were running back and forth, and people were shouting with joy. It was so exciting to watch them. After the game finished, I had a new dream.",
    "Now I'm a teenager and a player on the Qixian basketball team. It's not easy to be a good player. Before school starts, we have to train for an hour. After classes end, we practice again. Sometimes I stay up late to finish my homework.",
    "Many famous players were once Qixian students, and our school is proud of them. Playing basketball is my joy, and it's important to team up with one another. My plan for the future is to become a basketball star. Maybe you can see me on TV one day!"
  ],
  reading: {
    type: '推論',
    q: 'What can we learn about the writer?',
    o: ['The writer still wants to be a singer.', 'The writer only practices after school.', 'The writer thinks it\'s easy to be a good player.', 'A game at the gym changed the writer\'s dream.'],
    a: 3,
    ex: '作者經過體育館看到比賽後 I had a new dream，夢想從歌手變成籃球明星。(B) 早上也練；(C) 文中說 not easy。'
  },
  grammar: [
    { t: '時間連接詞 when / before / after',
      d: '連接兩個子句，可放句首（加逗號）或句中。before 後接「較晚」發生的事，after 後接「較早」發生的事。',
      ex: ['<b>Before</b> school starts, we have to train.', '<b>After</b> the game finished, I had a new dream.'],
      q: 'I always brush my teeth ______ I go to bed.', o: ['after', 'before', 'so', 'because'], a: 1,
      why: '先刷牙、後睡覺 → 「睡覺之前」刷牙，用 before。' },
    { t: '過去進行式：was / were ＋ V-ing',
      d: '表示過去某時刻「正在做」。常與 when 連用：正在進行的動作用過去進行式，突然發生的動作用過去簡單式。',
      ex: ['I <b>was walking</b> past the gym <b>when</b> I <b>saw</b> a basketball game.'],
      q: 'I ______ past the gym when I saw the game.', o: ['walk', 'am walking', 'was walking', 'were walking'], a: 2,
      why: '過去「正在走」→ 過去進行式；主詞 I 搭配 was。' },
    { t: '不定詞、動名詞與虛主詞 it',
      d: 'to V / V-ing 可以當主詞。不定詞當主詞太長時，常用 It 當虛主詞：It is + 形容詞 + to V。',
      ex: ['<b>Playing</b> basketball is my joy.', '<b>It\'s</b> not easy <b>to be</b> a good player.'],
      q: '______ is not easy to be a good player.', o: ['It', 'This', 'That', 'He'], a: 0,
      why: '真正的主詞是 to be a good player，句首用虛主詞 It。' }
  ],
  battle: {
    text: [
      { q: 'I played the guitar and the ______.（鼓）', o: ['drum', 'camera', 'gift', 'map'] },
      { q: 'I was walking ______ the Qixian gym.（經過）', o: ['past', 'into', 'along', 'top'] },
      { q: 'The players were running ______ and forth.（來回）', o: ['back', 'top', 'past', 'along'] },
      { q: 'People were ______ with joy.（大叫）', o: ['shouting', 'dropping', 'reaching', 'passing'] },
      { q: 'Now I\'m a ______ and a player on the team.（青少年）', o: ['teenager', 'reporter', 'writer', 'waiter'] },
      { q: 'Our school is ______ of them.（感到驕傲的）', o: ['proud', 'popular', 'funny', 'famous'] },
      { q: 'It\'s important to team up ______ one another.（與…合作）', o: ['with', 'for', 'to', 'of'] },
      { q: 'Sometimes I stay ______ late to finish my homework.（熬夜）', o: ['up', 'out', 'back', 'into'] }
    ],
    apply: [
      { q: 'I was doing my homework ______ Mom came home.', o: ['when', 'before', 'because', 'so'] },
      { q: 'It\'s interesting ______ the drum in a band.', o: ['to play', 'play', 'played', 'plays'] },
      { q: 'What ______ you doing at 9 p.m. last night?', o: ['were', 'did', 'are', 'was'] }
    ]
  }
},
/* ───────────── 9 ───────────── */
{
  id: 9, book: '八上', lessons: 'L5・L6', level: 'B',
  grammarScope: '未來式、spend / take / cost / pay、問路、交通工具',
  title: 'Our Trip to Cijin', genre: '旅遊計畫',
  article: [
    "Next Saturday, my friends and I are going to take a trip to Cijin. We decided to take the light rail because it's cheap and convenient. From the station near our school, it takes about thirty minutes to get to Hamasen. Then we'll walk two blocks to the Gushan Ferry and take a boat to the island. The boat trip only takes ten minutes, and the ticket doesn't cost much.",
    "On Cijin, we'll ride bicycles along the beach. There are many food stalls on the old street, and the vendors sell wonderful local snacks at low prices. I'm going to spend my own money on some gifts for my family. Remember: some stalls only take cash, so be careful with your money!",
    "Last week, Leo called his uncle, a fisherman on Cijin, and asked about the way to the famous temple. His uncle said, \"Go straight for two blocks and turn left at the corner. The temple is across from a bakery.\""
  ],
  reading: {
    type: '細節推論',
    q: 'Which is TRUE about the trip?',
    o: ['They should bring some cash.', 'They will take a taxi to Hamasen.', 'The boat trip takes thirty minutes.', 'The temple is next to the beach.'],
    a: 0,
    ex: 'some stalls only take cash → 最好帶現金。他們搭輕軌到哈瑪星；船程十分鐘；廟在麵包店對面。'
  },
  grammar: [
    { t: '未來式：will / be going to ＋ 原形動詞',
      d: '表示未來要做的事。常搭配 tomorrow、next Saturday、this weekend。will 的縮寫：we\'ll, it\'ll。',
      ex: ['We<b>\'re going to take</b> a trip to Cijin.', 'We<b>\'ll ride</b> bicycles along the beach.'],
      q: 'Next Saturday, we ______ to Cijin.', o: ['go', 'went', 'will go', 'are go'], a: 2,
      why: 'Next Saturday 是未來，用 will + 原形 go。' },
    { t: '花費：spend / take / cost / pay',
      d: '人 spend 時間/金錢 on 物；It takes (人) 時間 to V；物 cost (人) 金錢；人 pay 金錢 for 物。',
      ex: ['<b>It takes</b> about thirty minutes <b>to get</b> to Hamasen.', 'I\'m going to <b>spend</b> my own money <b>on</b> some gifts.'],
      q: 'The boat ticket ______ me forty dollars.', o: ['spent', 'took', 'paid', 'cost'], a: 3,
      why: '主詞是「物」（ticket）且談金錢，用 cost。' },
    { t: '問路與指路',
      d: '問：Excuse me. How can I get to…? / Where is…? 答：Go straight for two blocks. Turn left / right at the corner. It\'s across from / next to…',
      ex: ['<b>Go straight</b> for two blocks and <b>turn left</b> at the corner.'],
      q: 'Excuse me. ______ can I get to the beach?', o: ['Where', 'How', 'What', 'Which'], a: 1,
      why: '問「怎麼去」用 How can I get to…?' }
  ],
  battle: {
    text: [
      { q: 'We decided to take the light rail because it\'s cheap and ______.（方便的）', o: ['convenient', 'local', 'quick', 'broken'] },
      { q: 'It ______ about thirty minutes to get to Hamasen.（花費時間）', o: ['takes', 'spends', 'costs', 'pays'] },
      { q: 'We\'ll ride ______ along the beach.（腳踏車）', o: ['bicycles', 'trucks', 'taxis', 'ships'] },
      { q: 'The ______ sell wonderful local snacks.（小販）', o: ['vendors', 'visitors', 'clerks', 'fans'] },
      { q: 'I\'m going to ______ my own money on some gifts.（花費）', o: ['spend', 'take', 'cost', 'pay'] },
      { q: 'Some stalls only take ______.（現金）', o: ['cash', 'price', 'bank', 'pocket'] },
      { q: 'Go straight and turn left at the ______.（轉角）', o: ['corner', 'block', 'bottom', 'rule'] },
      { q: 'The temple is ______ from a bakery.（在…對面）', o: ['across', 'along', 'during', 'straight'] }
    ],
    apply: [
      { q: 'Excuse me, ______. How can I get to the post office?', o: ['sir', 'pocket', 'mistake', 'monster'] },
      { q: 'I ______ 500 dollars for the train ticket.', o: ['paid', 'spent', 'cost', 'took'] },
      { q: 'Tomorrow we ______ the metro to the hotel.', o: ['will take', 'took', 'takes', 'taking'] }
    ]
  }
},
/* ───────────── 10 ───────────── */
{
  id: 10, book: '八下', lessons: 'L1・L2', level: 'B',
  grammarScope: '形容詞比較級、原級比較 as…as、最高級、used to',
  title: 'Too Good to Be True?', genre: '校刊專欄',
  article: [
    "Did you know? Our school used to be in Qianjin District. In 2012, Qixian moved to Gushan. The new school is larger than the old one, and it's closer to the art museum.",
    "Qixian is famous for its basketball team. For players, shoes are the most important item. But good basketball shoes are often more expensive than other shoes. Last month, Leo wanted a pair of fashionable shoes. A seller online said, \"These shoes are on sale. They're as good as new, and they're the cheapest in town!\" Leo paid three thousand dollars, but he got a pair of fake shoes. Actually, it was a scam!",
    "Here are some useful tips. First, never give your information to strangers. Second, the cheapest deal isn't always the best one. Third, stop by a real store and try the shoes on. The owner can help you tell real shoes from fake ones. Leo said, \"I used to buy everything online, but I don't do that anymore.\""
  ],
  reading: {
    type: '寫作目的',
    q: 'What is the main purpose of the reading?',
    o: ['To tell the history of basketball shoes.', 'To warn students about online shopping scams.', 'To sell fashionable shoes to students.', 'To explain why Qixian moved to Gushan.'],
    a: 1,
    ex: '第二段描述 Leo 被騙，第三段給出防騙 tips，主要目的是提醒網購詐騙；第一段只是開場。'
  },
  grammar: [
    { t: '比較級與最高級',
      d: '兩者比較：-er / more + 形容詞 + than；三者以上：the -est / the most + 形容詞（in / of…）。large → larger → largest；expensive → more expensive → the most expensive；good → better → best。',
      ex: ['The new school is <b>larger than</b> the old one.', 'They\'re <b>the cheapest</b> in town!'],
      q: 'These shoes are the ______ in town.', o: ['cheap', 'cheaper', 'more cheap', 'cheapest'], a: 3,
      why: 'the … in town 是全城之中比較，用最高級 cheapest。' },
    { t: '原級比較：as ＋ 形容詞原級 ＋ as',
      d: '表示「和…一樣」。否定 not as…as 表示「不如」。中間只能放原級。',
      ex: ['These shoes are <b>as good as</b> new.'],
      q: 'My shoes are as ______ as yours.', o: ['good', 'better', 'best', 'well'], a: 0,
      why: 'as…as 中間用形容詞原級 good。' },
    { t: 'used to ＋ 原形動詞（過去習慣／狀態）',
      d: '表示「以前常…／以前是…（現在不是了）」。否定 didn\'t use to；注意與 be used to + V-ing（習慣於）區分。',
      ex: ['Our school <b>used to be</b> in Qianjin District.', 'I <b>used to buy</b> everything online.'],
      q: 'Leo ______ buy everything online, but he doesn\'t anymore.', o: ['use to', 'is used to', 'used to', 'uses to'], a: 2,
      why: '過去的習慣、現在不做了 → used to + 原形 buy。' }
  ],
  battle: {
    text: [
      { q: 'Our school ______ be in Qianjin District.（以前）', o: ['used to', 'is used to', 'uses to', 'use to'] },
      { q: 'For players, shoes are the most important ______.（物品）', o: ['item', 'part', 'word', 'tip'] },
      { q: 'Leo wanted a pair of ______ shoes.（時髦的）', o: ['fashionable', 'comfortable', 'useful', 'strange'] },
      { q: 'These shoes are on ______.（特價）', o: ['sale', 'order', 'deal', 'part'] },
      { q: 'They\'re as good ______ new.（和…一樣）', o: ['as', 'than', 'so', 'of'] },
      { q: 'He got a pair of ______ shoes. It was a scam!（假的）', o: ['fake', 'fresh', 'sweet', 'medium'] },
      { q: 'Never give your information to ______.（陌生人）', o: ['strangers', 'customers', 'owners', 'sellers'] },
      { q: 'Stop ______ a real store and try the shoes on.（順道拜訪）', o: ['by', 'up', 'on', 'off'] }
    ],
    apply: [
      { q: 'This sweater is ______ than that one.', o: ['cheaper', 'cheap', 'cheapest', 'more cheap'] },
      { q: 'The washing machine is out of ______. We can\'t use it.', o: ['order', 'part', 'deal', 'trick'] },
      { q: 'Jade Mountain is the ______ mountain in Taiwan.', o: ['highest', 'higher', 'high', 'most high'] }
    ]
  }
},
/* ───────────── 11 ───────────── */
{
  id: 11, book: '八下', lessons: 'L3・L4', level: 'B',
  grammarScope: '連綴動詞、使役動詞、情態副詞、副詞比較級與最高級',
  title: 'A Perfect Moon Festival', genre: '日記',
  article: [
    "Friday, September 25    Sunny",
    "Tonight was the Moon Festival. Mr. Chen invited our basketball team to a barbecue in his garden. We all arrived early. Mr. Chen had the boys make a fire, and he let the girls hang string lights on the wall. Soon, the meat smelled great, and the bread tasted sweet. Ben ate faster than anyone else, and he burned his mouth. Everyone laughed loudly.",
    "After the meal, we sat in a circle on the grass. The moon looked big and round. Mr. Chen said, \"The round moon stands for a happy family. You are my family.\" Amy is usually shy, but tonight she sang happily, and we all clapped and cheered.",
    "What a perfect experience! I'm writing about it in my diary now. Tonight made me feel lucky. We are teammates, and we are friends, too."
  ],
  reading: {
    type: '推論',
    q: 'What can we infer from the diary?',
    o: ['Mr. Chen did all the work by himself.', 'Ben was careful when he ate.', 'The team members worked together at the barbecue.', 'Amy didn\'t enjoy the night.'],
    a: 2,
    ex: '男生生火、女生掛燈，大家分工合作；Ben 吃太快燙到嘴，Amy 開心唱歌，(A)(B)(D) 皆錯。'
  },
  grammar: [
    { t: '連綴動詞 ＋ 形容詞',
      d: 'look / sound / smell / taste / feel / get / become 後面接形容詞（不是副詞），描述主詞的狀態或感覺。',
      ex: ['The meat <b>smelled great</b>, and the bread <b>tasted sweet</b>.', 'The moon <b>looked big</b> and round.'],
      q: 'The meat smells ______.', o: ['great', 'well', 'greatly', 'greatness'], a: 0,
      why: 'smell 是連綴動詞，後接形容詞 great。' },
    { t: '使役動詞 make / let / have ＋ 受詞 ＋ 原形動詞',
      d: 'make 叫（強迫）、let 讓（允許）、have 要求（安排）某人做某事，受詞後面用原形動詞。',
      ex: ['Mr. Chen <b>had the boys make</b> a fire.', 'He <b>let the girls hang</b> string lights.', 'Tonight <b>made me feel</b> lucky.'],
      q: 'Mr. Chen let the girls ______ the lights.', o: ['to hang', 'hang', 'hanging', 'hangs'], a: 1,
      why: 'let + 受詞 + 原形動詞 → hang。' },
    { t: '情態副詞與副詞比較',
      d: '副詞修飾動詞，多由形容詞加 ly（loud → loudly、happy → happily）。比較級：faster / more slowly than；最高級：the fastest / the most slowly。fast、hard 本身就是副詞。',
      ex: ['Everyone laughed <b>loudly</b>.', 'Ben ate <b>faster than</b> anyone else.'],
      q: 'Ben ate ______ than anyone else.', o: ['fast', 'fastest', 'more fast', 'faster'], a: 3,
      why: '有 than → 比較級；fast 的比較級是 faster。' }
  ],
  battle: {
    text: [
      { q: 'Mr. Chen ______ our basketball team to a barbecue.（邀請）', o: ['invited', 'ordered', 'noticed', 'counted'] },
      { q: 'Mr. Chen had the boys ______ a fire.（生火）', o: ['make', 'made', 'to make', 'making'] },
      { q: 'He let the girls hang ______ lights on the wall.（串）', o: ['string', 'circle', 'line', 'heart'] },
      { q: 'Soon, the meat ______ great.（聞起來）', o: ['smelled', 'sounded', 'counted', 'burned'] },
      { q: 'Ben ate faster than anyone ______.（其他的）', o: ['else', 'other', 'another', 'others'] },
      { q: 'Ben ______ his mouth.（燙傷）', o: ['burned', 'boiled', 'bit', 'hopped'] },
      { q: 'Everyone laughed ______.（大聲地）', o: ['loudly', 'slowly', 'gently', 'successfully'] },
      { q: 'The round moon ______ for a happy family.（代表）', o: ['stands', 'digs', 'counts', 'orders'] }
    ],
    apply: [
      { q: 'The cake looks ______.', o: ['delicious', 'deliciously', 'well', 'successfully'] },
      { q: 'Mom doesn\'t let me ______ up late.', o: ['stay', 'to stay', 'staying', 'stayed'] },
      { q: 'The fans ______ loudly for the team.', o: ['cheered', 'burned', 'boiled', 'counted'] }
    ]
  }
},
/* ───────────── 12 ───────────── */
{
  id: 12, book: '八下', lessons: 'L5・L6', level: 'B',
  grammarScope: '感官動詞、反身代名詞、not only…but also、數量不定代名詞、if、(al)though',
  title: 'Save the Sea Turtles', genre: '校刊投書・呼籲',
  article: [
    "Last summer, a typhoon hit Kaohsiung. That night, I heard the rain hitting my window. It was scary. After the typhoon, our class went to Cijin Beach to clean it up. The beach looked terrible. We found not only plastic bottles but also straws, bags, and even a broken chair. Some students picked up the garbage; others carried it to the trucks.",
    "We also saw two sea turtles. One was fine, but the other had a straw in its nose. It was a sad sight. Plastic from our homes can end up in the ocean, and turtles often eat plastic bags by mistake.",
    "Although we were tired, we felt proud of ourselves. But cleaning the beach once is not enough. If we don't take action every day, more sea animals will die. What can you do? Carry your own metal straw, spoon, fork, and chopsticks instead of plastic ones. Don't wait for someone else. Start with yourself today!"
  ],
  reading: {
    type: '作者意圖',
    q: 'What does the writer want readers to do?',
    o: ['Stay home during a typhoon.', 'Go to Cijin to see sea turtles.', 'Buy new straws for their classmates.', 'Take action to keep plastic out of the ocean.'],
    a: 3,
    ex: '最後一段 If we don\'t take action… Carry your own metal straw… Start with yourself today! 是在呼籲讀者減少塑膠、保護海洋。'
  },
  grammar: [
    { t: '感官動詞 see / hear / watch / feel ＋ 受詞 ＋ 原形 / V-ing',
      d: '接原形動詞表示看到「整個過程」；接 V-ing 表示看到「正在進行」。',
      ex: ['I <b>heard the rain hitting</b> my window.'],
      q: 'I heard the rain ______ my window last night.', o: ['to hit', 'hitting', 'hits', 'was hit'], a: 1,
      why: '感官動詞 hear + 受詞 + V-ing（或原形），不可接 to V。' },
    { t: '反身代名詞；not only A but also B',
      d: '主詞和受詞是同一人時用反身代名詞：myself / yourself / himself / herself / ourselves / yourselves / themselves。not only A but also B 連接對等的字詞，表示「不但 A 而且 B」。',
      ex: ['We felt proud of <b>ourselves</b>.', 'We found <b>not only</b> plastic bottles <b>but also</b> straws.'],
      q: 'We felt proud of ______.', o: ['us', 'our', 'ourselves', 'ours'], a: 2,
      why: '主詞 We 和受詞是同一群人，用反身代名詞 ourselves。' },
    { t: 'if / although；數量不定代名詞',
      d: 'if 條件句「主要子句用未來式、if 子句用現在式」。although / though 表「雖然」，不可再加 but。不定代名詞：兩者 one…the other；很多人中 some…others。',
      ex: ['<b>If</b> we <b>don\'t</b> take action, more sea animals <b>will</b> die.', '<b>Although</b> we were tired, we felt proud.', '<b>One</b> was fine, but <b>the other</b> had a straw in its nose.'],
      q: '______ we were tired, we felt proud of ourselves.', o: ['Although', 'If', 'Because', 'So'], a: 0,
      why: '「累」和「感到驕傲」語意相反，用 Although（雖然）。' }
  ],
  battle: {
    text: [
      { q: 'I heard the rain ______ my window.（打在）', o: ['hitting', 'to hit', 'hits', 'is hitting'] },
      { q: 'We found not only plastic bottles ______ straws.（而且）', o: ['but also', 'and also', 'or', 'so'] },
      { q: 'Some students picked up the garbage; ______ carried it to the trucks.（其他人）', o: ['others', 'the other', 'another', 'other'] },
      { q: 'One was fine, but ______ had a straw in its nose.（另一隻）', o: ['the other', 'another', 'others', 'other'] },
      { q: 'Plastic from our homes can end up in the ______.（海洋）', o: ['ocean', 'apartment', 'drawer', 'elevator'] },
      { q: '______ we were tired, we felt proud of ourselves.（雖然）', o: ['Although', 'If', 'Because', 'So'] },
      { q: 'If we don\'t take ______ every day, more sea animals will die.（行動）', o: ['action', 'service', 'choice', 'lesson'] },
      { q: 'Carry your own metal straw ______ plastic ones.（而不是）', o: ['instead of', 'because of', 'end up', 'no longer'] }
    ],
    apply: [
      { q: 'Ben cut ______ when he was cooking.', o: ['himself', 'him', 'his', 'he'] },
      { q: 'If it ______ tomorrow, we will stay home.', o: ['rains', 'will rain', 'rained', 'rain'] },
      { q: 'I saw a boy ______ in the ocean.', o: ['swimming', 'to swim', 'swims', 'swam'] }
    ]
  }
}
];
