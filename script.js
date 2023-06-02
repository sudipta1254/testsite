list = ['AdviceAnimals', 'MemeEconomy', 'ComedyCemetery', 'memes',
        'dankmemes', 'PrequelMemes', 'terriblefacebookmemes',
        'pewdiepiesubmissions', 'funny', 'teenagers', 'HistoryMemes',
        'MoldyMemes', 'wholesomememes', 'raimimemes', 'okbuddyretard',
        'comedyheaven', 'me_irl', 'crappyoffbrands', 'im14andthisisdeep',
        'trippinthroughtime', '4chan', 'TheRealJoke', 'nobodyasked',
        'wheredidthesodago', 'suicidebywords', 'madlads', 'puns',
        'devilmaycry', 'PhotoshopBattles'];


async function meme(w) {
   data = await fetch(`https://meme-api.com/gimme/${w}`)
   .then(res => res.json())
   .catch(error => {
      alert(error);
   });
   d();
}

function get() {
   value = document.querySelector('input').value;
   meme(value);
}

function d() {
   d1 = document.querySelector('.d21');
   a1 = document.querySelector('.d22');
   a2 = document.querySelector('.d23');
   a3 = document.querySelector('img');
   i = document.querySelector('a');
   d1.innerHTML = `Subreddit:- ${data.subreddit}`;
   a1.innerHTML = `Author:- ${data.author}`;
   a2.innerHTML = `${data.title}`;
   a3.src = `${data.url}`;
   i.href = `${data.preview[data.preview.length - 1]}`;
}


