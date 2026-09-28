// 補充資料（併入 window.UNITS）：
//   zh     文章中譯；{ } 內為對應課本單字、加底線
//   q2     每個文法的第二題（會考風格）；o 第一個為正解，載入時依固定規則放到平均分配的位置
//   bzh    對戰例句填空的整句中譯（順序對應 battle.text 與 battle.apply）
(function () {
  var EXTRA = [
  /* 1 */ {
    zh: [
      '嗨！我的{名字}是 Kevin。我今年十三{歲}，是七賢的{國中}學生。{很高興認識你}！',
      '這是一張我{溫暖的}{家庭}的{照片}。我爸爸是{廚師}，媽媽是{護士}。我的{叔叔}是{農夫}，他的{妻子}是{醫生}。我的{嬸嬸}{年輕}又{漂亮}，她的{丈夫}又高又{英俊}。那個{可愛的}男孩是誰？他是{他們的}{兒子}，我的{堂弟} Leo。他{幾歲}？他{只有}一{歲}。',
      'Leo 和我的{體型}{不同}，{但是}{我們的}{生肖}{一樣}。我們的生肖是什麼？我們都屬{蛇}！{那}我們的{體育}老師林老師{呢}？他屬{虎}。{難怪}他既{嚴格}又{精力充沛}！'
    ],
    q2: [
      { q: 'Amy and I are in the same class. ______ teacher is Ms. Lin, and she is very nice.', o: ['Our', 'We', 'Their', 'His'] },
      { q: 'A: Are Leo and Kevin cousins?\nB: Yes, they ______. Their moms are sisters.', o: ['are', 'is', 'am', 'aren\'t'] },
      { q: 'A: ______ is your cousin?\nB: He\'s only one year old. He\'s very cute.', o: ['How old', 'Who', 'What', 'What animal sign'] }
    ],
    bzh: { text: ['我爸爸是廚師，我媽媽是護士。', '這是一張我溫暖的家庭的照片。', '我的叔叔是農夫，他的妻子是醫生。', '我的嬸嬸年輕又漂亮，她的丈夫又高又英俊。', '他是他們的兒子，我的堂弟 Leo。', 'Leo 和我的體型不同。', '我們的生肖是什麼？我們都屬蛇！', '難怪他既嚴格又精力充沛！'],
           apply: ['王先生是我爸爸的哥哥。他是我的伯父。', 'A：他們的生肖是什麼？ B：他們都屬龍。', '陳小姐是我媽媽的妹妹。她是我的阿姨。'] }
  },
  /* 2 */ {
    zh: [
      '{你猜怎麼著}？我們學校在高雄鼓山區。它在哪裡呢？它在高雄市立美術館{附近}。',
      '在上學的{路}上，{請}{小心}。在{斑馬線}{前面}停下來，看看{紅綠燈}。紅燈時不要{穿越}{馬路}。不要在{人行道}上用{智慧型手機}{講話}，也不要{一直}{聽}{歌}。{注意}{迎面而來的}車子！',
      '在美術館裡，你可以{和}朋友拍{照片}，但是你{不可以}{發出}{任何}{噪音}。{請}不要{吵鬧}。{等}林老師，{聽}她說。她會{談}到這座美術館{特別的}{設計}。{我們一起}去看看{吧}！'
    ],
    q2: [
      { q: 'Ben: I can\'t find my smartphone.\nAmy: Look! It\'s ______ the bag and the book. The bag is on its left, and the book is on its right.', o: ['between', 'behind', 'in front of', 'inside'] },
      { q: 'The baby is in the bedroom. ______ noisy, please.', o: ['Don\'t be', 'Don\'t', 'Be', 'Aren\'t'] },
      { q: 'Ms. Lin is our art teacher. Please wait for ______ in front of the museum. She can talk about the design with us.', o: ['her', 'she', 'them', 'him'] }
    ],
    bzh: { text: ['它在高雄市立美術館附近。', '在斑馬線前面停下來，看看紅綠燈。', '紅燈時不要穿越馬路。', '在上學的路上，請小心。', '你可以拍照，但是你不可以發出任何噪音。', '她會談到這座美術館特別的設計。', '注意迎面而來的車子！', '請不要吵鬧。'],
           apply: ['很晚了。我們安靜一點吧，爸爸在臥室裡。', '請從廚房拿一些冰塊來。', '在馬路上不要用智慧型手機講話。小心！'] }
  },
  /* 3 */ {
    zh: [
      '今天是{星期五}下午。{放學後}，{運動場}和{籃球場}上有{許多}學生，{太陽}{仍然}{照耀}著。',
      '七賢{籃球}隊在做什麼呢？女生們正在教室裡{準備}一場{派對}。她們正把{三明治}和一個大蛋糕{放}在桌上。今天是陳老師的{生日}！他是球隊的老師。',
      '男生們在哪裡？他們正和陳老師在{體育館}裡{健身}。現在幾點？下午六點，{每個人}都{餓}了。男生們正帶陳老師參觀這棟{建築}，一邊走向教室。「{生日}快樂！」{大家}都這麼{說}。陳老師很嚴格，{然而}他也很{友善}。球隊就是一個溫暖的大家庭。'
    ],
    q2: [
      { q: 'Listen! The girls ______ "Happy Birthday" in the classroom. It\'s a party for Mr. Chen.', o: ['are singing', 'sing', 'is singing', 'singing'] },
      { q: 'A: ______ is it now?\nB: It\'s 6 p.m. Hurry up! The party is at 6:10.', o: ['What time', 'What day', 'Where', 'Who'] },
      { q: 'A: ______ any sandwiches on the table?\nB: No, there aren\'t. They\'re in the kitchen.', o: ['Are there', 'Is there', 'There are', 'Are they'] }
    ],
    bzh: { text: ['太陽仍然照耀著。', '運動場上有許多學生。', '女生們正在教室裡準備一場派對。', '她們正把三明治和一個大蛋糕放在桌上。', '男生們正和陳老師在體育館裡健身。', '男生們正帶陳老師參觀這棟建築。', '下午六點了，每個人都餓了。', '陳老師很嚴格，然而他也很友善。'],
           apply: ['十二點了，現在是中午。我們吃午餐吧！', 'A：今天星期幾？ B：星期六。', '你看！孩子們正在盪鞦韆。'] }
  },
  /* 4 */ {
    zh: [
      'Jay 讀九{年級}，是七賢籃球{隊}的{球員}。他{通常}早上五點半{起床}。他洗{臉}、刷{牙}，{很快地}吃完{早餐}。{然後}他{每}天早上和{球隊}一起{練習}籃球。放學後，他們又{一起}{練習}兩個小時。',
      'Jay {多常}打電動？他{很少}打。他{知道}自己{必須}為{考試}努力{讀書}。週末時，他{常常}幫媽媽做{家事}。他{拖}{髒}{地板}、{洗碗盤}，還把{垃圾}拿出去倒。',
      '球隊一個{月}比賽{一次}或{兩次}。Jay 說：「我們{有時候}會{輸}，但我們{總是}玩得很{開心}！」'
    ],
    q2: [
      { q: 'My brother is a baseball player. He ______ every morning, so he gets up at five.', o: ['practices', 'practice', 'is practice', 'practicing'] },
      { q: 'Jay ______ plays video games. He plays them only once a month.', o: ['seldom', 'always', 'usually', 'often'] },
      { q: 'A: ______ do you do the dishes?\nB: Every day after dinner. It\'s my job at home.', o: ['How often', 'How much', 'Where', 'Who'] }
    ],
    bzh: { text: ['他通常早上五點半起床。', '他洗臉、刷牙。', '然後他每天早上和球隊一起練習籃球。', '他很少打電動。', '他知道自己必須為考試努力讀書。', '他拖髒地板，還把垃圾拿出去倒。', '週末時，他常常幫媽媽做家事。', '「我們有時候會輸，但我們總是玩得很開心！」'],
           apply: ['A：你多常運動？ B：一個星期三次。', 'Kevin 從不晚寫功課。', '馬桶座很髒，上面有很多細菌。'] }
  },
  /* 5 */ {
    zh: [
      '{親愛的}同學們：',
      '園遊會是{什麼時候}？在{12 月} 5 日星期六。我們班要做{鬆餅}，{需要}你們的{幫忙}！我們{需要}{多少}{麵粉}？大約兩{公斤}。{多少個}蛋？三十個。我們還{需要}{幾}{瓶}牛奶和{一點}{糖}。',
      '很{難}嗎？{當然}不！我媽媽可以{教}我們。{首先}，把{麵粉}、蛋和牛奶{混合}。接著{加熱}{平底鍋}，{加入}一些{奶油}。把{麵糊}煎到{圓圓的}、呈{褐色}{為止}。這樣就{完成}了！',
      '我們可以用{誰的}{平底鍋}？Amy 的和我的。你的鬆餅想加{哪}一種，{糖}還是{奶油}？{兩種都}很{好吃}！請在星期五前{給}我你的答案。',
      '{愛你們的} Ben'
    ],
    q2: [
      { q: 'A: ______ is Christmas?\nB: It\'s on December 25th. We have a party every year.', o: ['When', 'Which', 'Whose', 'How many'] },
      { q: 'A: Is this Amy\'s pan?\nB: No, it\'s not ______. Her pan is black, and this one is red.', o: ['hers', 'her', 'she', 'its'] },
      { q: 'A: How ______ eggs do we need for the pancakes?\nB: About ten. And we need a little milk, too.', o: ['many', 'much', 'often', 'old'] }
    ],
    bzh: { text: ['我們班要為園遊會做鬆餅。', '我們需要多少麵粉？大約兩公斤。', '加熱平底鍋，加入一些奶油。', '把麵糊煎到圓圓的、呈褐色為止。', '兩種都很好吃！', '我們還需要幾瓶牛奶。', '很難嗎？當然不！', '把麵糊煎到圓圓的、呈褐色為止。'],
           apply: ['A：你需要幾杯水？ B：兩杯，謝謝。', 'A：你想要哪一個，派還是蛋糕？ B：請給我派。', '聖誕節在十二月。'] }
  },
  /* 6 */ {
    zh: [
      '上星期六，我們班{參觀}了高雄市立{美術館}。它離七賢{只}有十{分鐘}，{所以}我們走路過去。{美術館}裡的{藝術}作品{令人驚艷}。林老師向我們{解釋}畫作背後的{故事}，我們{學}到很多。',
      '接著我們在公園的{池塘}旁吃午餐。每個人都{帶了}{點心}，我們一起{分享}。有些{孩子}在樹後面玩{捉迷藏}。Ben 很{懶惰}，沒有跟我們一起玩，{甚至}用手機{上網}了一個{小時}。',
      '{後來}，我們{收集}了{塑膠}瓶並把它們丟掉，{保持}公園的整潔。{最後}，大家雖然累但很開心。那真是{超棒的}一天！'
    ],
    q2: [
      { q: 'A: Where ______ you last Sunday?\nB: I was at the museum with my family.', o: ['were', 'was', 'are', 'did'] },
      { q: 'Ben ______ the Internet for three hours last night, so he was tired this morning.', o: ['surfed', 'surfs', 'surf', 'is surfing'] },
      { q: 'Amy ______ a new suitcase last week. It was not expensive.', o: ['bought', 'buys', 'buyed', 'brought'] }
    ],
    bzh: { text: ['上星期六，我們班參觀了高雄市立美術館。', '林老師向我們解釋畫作背後的故事。', '每個人都帶了點心，我們一起分享。', 'Ben 很懶惰，他沒有跟我們一起玩。', '他甚至用手機上網了一個小時。', '我們收集了塑膠瓶並把它們丟掉。', '接著我們在公園的池塘旁吃午餐。', '最後，大家雖然累但很開心。'],
           apply: ['我們昨天在海灘玩得很開心。', '兩天前，我和弟弟在河裡游泳。', '我爺爺上個月買了一個大行李箱給我。'] }
  },
  /* 7 */ {
    zh: [
      '高雄的{天氣}如何？在這裡，{夏天}是一個漫長的{季節}。天氣通常又熱又{晴朗}，{空氣}很{潮濕}。但到了下午，{天空}有時會{變}{暗}，{大}{陣雨}來得很快。{下雨的}午後很{常見}，{所以}許多七賢學生總是帶{雨傘}上學。',
      '上星期二，Amy {忘了}帶{雨傘}。籃球練習後她淋雨走路回家，{所以}{頭髮}和{衣服}全{濕}了。隔天早上，她{覺得}{身體不舒服}。她{頭}{痛}，還{發燒}、{喉嚨痛}。媽媽為她煮了熱湯，還給她吃了{藥}。',
      'Amy {打電話}給教練陳老師說：「我{生病}了，{因為}我{感冒}了。我今天可以{待}在家嗎？」陳老師{傳}了一則{訊息}給她：「{太糟了}！{待}在家好好休息。{健康}第一。」',
      '現在 Amy 總是在包包裡放一把{雨傘}和一件{外套}。'
    ],
    q2: [
      { q: 'A: What\'s the weather ______ in Kaohsiung today?\nB: It\'s cloudy and windy. You should bring a coat.', o: ['like', 'about', 'for', 'with'] },
      { q: 'Mr. Chen sent a message ______ Amy last night. It said, "Stay home and rest."', o: ['to', 'for', 'of', 'at'] },
      { q: 'Amy stayed home ______ she had a fever and a headache.', o: ['because', 'so', 'but', 'or'] }
    ],
    bzh: { text: ['在這裡，夏天是一個漫長的季節。', '天氣通常又熱又晴朗。', '下午的大陣雨來得很快。', '上星期二，Amy 忘了帶雨傘。', '隔天早上，她覺得身體不舒服。', '她發燒、喉嚨痛。', '陳老師傳了一則訊息給她。', '媽媽給她吃了一些藥。'],
           apply: ['Ben 發燒了，所以他今天不能上學。', 'A：台北的天氣如何？ B：又冷又下雨。', '我阿姨買了一件新外套給我。'] }
  },
  /* 8 */ {
    zh: [
      '{當}我還在讀小學時，我想當一名{歌手}。我會彈{吉他}、打{鼓}。但有一天，一切都改變了。{當}我正走{過}七賢體育館時，看到了一場籃球比賽。球員們{來回}奔跑，人們{歡喜}地{大叫}。看他們打球真是太{刺激}了！比賽{結束}後，我有了一個新{夢想}。',
      '現在我是一個{青少年}，也是七賢籃球隊的球員。要當一個好球員並不容易。上學前，我們{必須}{訓練}一個小時。放學後，我們再練一次。有時候我會{熬夜}{完成}功課。',
      '許多{有名的}球員以前都是七賢的學生，學校以他們為榮。打籃球是我的{樂趣}，而且{彼此}{合作}很{重要}。我{未來}的{計畫}是成為籃球{明星}。也許有一天你會在電視上看到我！'
    ],
    q2: [
      { q: '______ the game finished, the players went home and had dinner.', o: ['After', 'Before', 'Because', 'So'] },
      { q: 'A: Why didn\'t you answer my call last night?\nB: Sorry, I ______ a shower then.', o: ['was taking', 'take', 'am taking', 'were taking'] },
      { q: '______ the guitar is my joy. I play it for an hour every night.', o: ['Playing', 'Play', 'Plays', 'Played'] }
    ],
    bzh: { text: ['我會彈吉他、打鼓。', '我正走過七賢體育館。', '球員們來回奔跑。', '人們歡喜地大叫。', '現在我是一個青少年，也是球隊的球員。', '學校以他們為榮。', '彼此合作很重要。', '有時候我會熬夜完成功課。'],
           apply: ['媽媽回家時，我正在寫功課。', '在樂團裡打鼓很有趣。', '昨晚九點你正在做什麼？'] }
  },
  /* 9 */ {
    zh: [
      '下星期六，我和朋友們要去旗津{旅行}。我們{決定}搭輕軌，因為它{便宜}又{方便}。從學校附近的車站出發，到哈瑪星大約要三十分鐘。然後我們會走兩個{街區}到鼓山輪渡站，搭{船}到島上。{船程}只要十分鐘，船票也{花}不了多少錢。',
      '在旗津，我們會沿著海灘{騎}{腳踏車}。老街上有很多小吃{攤}，{小販}們以{低}{價}{賣}{很棒的}{在地}小吃。我打算{花}{自己的}錢買些禮物給家人。{記住}：有些{攤位}只收{現金}，所以要{小心}保管你的錢！',
      '上星期，Leo 打電話給在旗津當漁夫的叔叔，問他怎麼去那座有名的{廟}。叔叔說：「{直}走兩個{街區}，在{轉角}{左轉}。{廟}就在一間{麵包店}的{對面}。」'
    ],
    q2: [
      { q: 'Look at the dark sky. It ______ this afternoon. Remember to bring your umbrella.', o: ['is going to rain', 'rained', 'rains', 'was raining'] },
      { q: 'It ______ me thirty minutes to get to Cijin by light rail and boat.', o: ['took', 'spent', 'cost', 'paid'] },
      { q: 'A: How can I get to the hotel? It\'s far from here.\nB: You can ______ a taxi.', o: ['take', 'drive', 'row', 'spend'] }
    ],
    bzh: { text: ['我們決定搭輕軌，因為它便宜又方便。', '到哈瑪星大約要三十分鐘。', '我們會沿著海灘騎腳踏車。', '小販們賣很棒的在地小吃。', '我打算花自己的錢買些禮物。', '有些攤位只收現金。', '直走，在轉角左轉。', '廟就在一間麵包店的對面。'],
           apply: ['先生，不好意思。請問郵局怎麼走？', '我付了五百元買火車票。', '明天我們會搭捷運去飯店。'] }
  },
  /* 10 */ {
    zh: [
      '你知道嗎？我們學校{以前}在前金區。2012 年，七賢搬到了鼓山。新學校{比}舊學校大，也離美術館更近。',
      '七賢以籃球隊聞名。對球員來說，鞋子是{最}重要的{物品}。但好的籃球鞋常常{比}其他鞋子貴。上個月，Leo 想要{一雙}{時髦的}鞋。一個網路{賣家}說：「這雙鞋在{特價}。它跟新的一樣好，而且是全城最便宜的！」Leo 付了三千元，結果拿到{一雙}{假}鞋。{事實上}，那是一場{詐騙}！',
      '這裡有一些{有用的}{小祕訣}。第一，絕對不要把你的{資料}給{陌生人}。第二，最便宜的{交易}不一定是最好的。第三，{順道去}一家真正的店試穿。{店主}可以幫你分辨真鞋和{假}鞋。Leo 說：「我{以前}什麼都在網路上買，但我{再也}不這麼做了。」'
    ],
    q2: [
      { q: 'Leo\'s shoes cost 3,000 dollars, and mine cost 2,000 dollars. My shoes are ______ than Leo\'s.', o: ['cheaper', 'more expensive', 'the cheapest', 'as cheap'] },
      { q: 'Amy and Ben are both thirteen years old. Amy is ______ Ben.', o: ['as old as', 'older than', 'the oldest', 'as older as'] },
      { q: 'Mr. Wang ______ in Qianjin District, but now he lives in Gushan.', o: ['used to live', 'is used to living', 'uses to live', 'used to living'] }
    ],
    bzh: { text: ['我們學校以前在前金區。', '對球員來說，鞋子是最重要的物品。', 'Leo 想要一雙時髦的鞋。', '這雙鞋在特價。', '它跟新的一樣好。', '他拿到一雙假鞋。那是一場詐騙！', '絕對不要把你的資料給陌生人。', '順道去一家真正的店試穿鞋子。'],
           apply: ['這件毛衣比那件便宜。', '洗衣機故障了，我們不能用。', '玉山是台灣最高的山。'] }
  },
  /* 11 */ {
    zh: [
      '9 月 25 日　星期五　晴',
      '今晚是{中秋節}。陳老師{邀請}我們籃球隊到他的花園烤肉。我們都很早就{到了}。陳老師要男生們{生火}，讓女生們把{串燈}掛在{牆}上。{很快地}，{肉}{聞起來}好香，{麵包}{吃起來}甜甜的。Ben 吃得比{其他任何人}都快，結果{燙}到了嘴巴。大家都{大聲地}{笑}了。',
      '吃完這{頓飯}後，我們{圍成一圈}坐在{草地}上。{月亮}看起來又大又圓。陳老師說：「圓圓的{月亮}{代表}幸福的家庭。你們就是我的家人。」Amy 平常很{害羞}，但今晚她開心地唱歌，我們都{拍手}{歡呼}。',
      '真是一次{完美的}{經驗}！我現在正把它寫進我的{日記}。今晚讓我覺得自己很{幸運}。我們是隊友，也是朋友。'
    ],
    q2: [
      { q: 'A: Let\'s have a picnic by the lake this weekend.\nB: Your idea sounds ______. I\'ll bring some sandwiches.', o: ['perfect', 'perfectly', 'slowly', 'well'] },
      { q: 'Mom made me ______ to bed early last night because I had a test today.', o: ['go', 'to go', 'going', 'went'] },
      { q: 'Amy is shy. She speaks very ______ in class, so the teacher often can\'t hear her.', o: ['quietly', 'loudly', 'happily', 'quiet'] }
    ],
    bzh: { text: ['陳老師邀請我們籃球隊去烤肉。', '陳老師要男生們生火。', '他讓女生們把串燈掛在牆上。', '很快地，肉聞起來好香。', 'Ben 吃得比其他任何人都快。', 'Ben 燙到了嘴巴。', '大家都大聲地笑了。', '圓圓的月亮代表幸福的家庭。'],
           apply: ['這個蛋糕看起來很好吃。', '媽媽不讓我熬夜。', '球迷們大聲地為球隊歡呼。'] }
  },
  /* 12 */ {
    zh: [
      '去年夏天，一個{颱風}侵襲高雄。那天晚上，我{聽到}雨打在我的{窗戶}上，好{可怕}。{颱風}過後，我們班去旗津海灘淨灘。海灘看起來很糟。我們不只找到塑膠瓶，還有{吸管}、袋子，甚至一張壞掉的椅子。有些同學撿{垃圾}，其他人把垃圾{搬}到卡車上。',
      '我們還看到兩隻{海龜}。一隻沒事，但另一隻的鼻子裡卡著一根{吸管}。那是令人難過的{景象}。我們家裡的塑膠可能{最後}流進{海洋}，而{海龜}常常誤吃塑膠袋。',
      '{雖然}我們很累，但我們為自己感到驕傲。可是淨灘一次是不夠的。{如果}我們不每天{採取行動}，會有更多海洋動物{死亡}。你可以做什麼？{攜帶}你自己的{金屬}{吸管}、{湯匙}、{叉子}和{筷子}，{而不是}用塑膠的。不要等{別人}，今天就從你自己開始！'
    ],
    q2: [
      { q: 'I saw Mr. Lin ______ his dog in the park this morning. The dog looked very happy.', o: ['feeding', 'to feed', 'fed', 'feeds'] },
      { q: 'My little brother is only five, but he can put on his clothes by ______.', o: ['himself', 'him', 'his', 'he'] },
      { q: 'I have two pets. One is a turtle, and ______ is a cat.', o: ['the other', 'another', 'others', 'the others'] }
    ],
    bzh: { text: ['我聽到雨打在我的窗戶上。', '我們不只找到塑膠瓶，還有吸管。', '有些同學撿垃圾，其他人把垃圾搬到卡車上。', '一隻沒事，但另一隻的鼻子裡卡著一根吸管。', '我們家裡的塑膠可能最後流進海洋。', '雖然我們很累，但我們為自己感到驕傲。', '如果我們不每天採取行動，會有更多海洋動物死亡。', '攜帶你自己的金屬吸管，而不是用塑膠的。'],
           apply: ['Ben 煮飯時割傷了自己。', '如果明天下雨，我們就會待在家。', '我看到一個男孩在海裡游泳。'] }
  }
  ];

  // 第二題正解位置：與第一題錯開，全體平均分配
  var BASE2 = [1, 3, 0];
  window.UNITS.forEach(function (u, i) {
    var x = EXTRA[i];
    u.zh = x.zh;
    u.grammar.forEach(function (g, k) {
      var q = x.q2[k], target = (BASE2[k] + i) % 4, correct = q.o[0];
      var rest = q.o.slice(1);
      rest.splice(target, 0, correct);
      g.q2 = { q: q.q, o: rest, a: target };
    });
    u.battle.text.forEach(function (b, k) { b.zh = x.bzh.text[k]; });
    u.battle.apply.forEach(function (b, k) { b.zh = x.bzh.apply[k]; });
  });
})();
