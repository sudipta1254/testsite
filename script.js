list = ['AdviceAnimals', 'MemeEconomy', 'ComedyCemetery', 'memes',
        'dankmemes', 'PrequelMemes', 'terriblefacebookmemes',
        'pewdiepiesubmissions', 'funny', 'teenagers', 'HistoryMemes',
        'MoldyMemes', 'wholesomememes', 'raimimemes', 'okbuddyretard',
        'comedyheaven', 'me_irl', 'crappyoffbrands', 'im14andthisisdeep',
        'trippinthroughtime', '4chan', 'TheRealJoke', 'nobodyasked',
        'wheredidthesodago', 'suicidebywords', 'madlads', 'puns',
        'devilmaycry', 'PhotoshopBattles', 'comedyhomicide', 'holesome',
        'ihaveihaveihavereddit', 'Animemes', 'ShitPostCrusaders',
        'Angryupvote', 'artmemes', 'cursedcomments', 'depression_memes',
        'linuxmemes', 'ProgrammerHumor', 'maybemaybemaybe', 'MEOW_IRL',
        'SequelMemes', 'SesameStreetMemes', 'Unexpected', 'YouSeeComrade',
        'shitposting', 'BPDmemes', 'GenealogyMemes', 'Im15AndThisIsYeet', 
        'ComedyNecrophilia', 'dogelore', 'whenthe', 'anarchyches'];


async function meme(w) {
   data = await fetch(`https://meme-api.com/gimme/${w}`)
   .then(res => res.json())
   .catch(error => {
      alert(error);
   });
   //console.log(`${data.subreddit} ${w}`);
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
   a4 = document.querySelector('.d41');
   i = document.querySelector('a');
   d1.innerHTML = `Subreddit:- ${data.subreddit}`;
   a1.innerHTML = `Author:- ${data.author}`;
   a2.innerHTML = `${data.title}`;
   a3.src = `${data.url}`;
   a4.innerHTML = `${data.ups} upvotes`;
   i.href = `${data.preview[data.preview.length - 1]}`;
}

function random() {
   page = list[Math.floor(Math.random()*list.length)];
   meme(page);
}

function down(link) {
   a3 = document.querySelector('.d3');
   li = a3.children[0].src;
   link.href = li;
}

function visit(link) {
   link.href = data.postLink;
}

//random();
