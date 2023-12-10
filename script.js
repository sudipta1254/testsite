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
        'linuxmemes', 'ProgrammerHumor', 'MEOW_IRL',
        'SequelMemes', 'SesameStreetMemes', 'YouSeeComrade',
        'shitposting', 'BPDmemes', 'GenealogyMemes', 'Im15AndThisIsYeet', 
        'ComedyNecrophilia', 'dogelore', 'whenthe', 'anarchychess'];


async function meme(w) {
   data = await fetch(`https://meme-api.com/gimme/${w}`)
   .then(res => res.json())
   .catch(error => {
      alert(error);
   });
   if (data.subreddit == null || data.subreddit == '')
      alert(w+' not found!');
   d();
}

function get(x = 1) {
   value = $('input').val();
   if (value == '') {
      if(x)
         alert('Enter a subreddit to continue!');
      return;
   }
   meme(value);
}

function d() {
   i = $('a');
   if(data.url.includes('.gif'))
      get(0);
   else {
      $('.d21').text(`Subreddit:- ${data.subreddit}`);
      $('.d22').text(`Author:- ${data.author}`);
      $('.d23').text(`${data.title}`);
      $('img').attr('src', `${data.url}`);
      $('.d41').text(`${data.ups} ${data.ups == 1 ? 'upvote' : 'upvotes'}`);
      i[0].href = `${data.preview[data.preview.length - 1]}`;
      i[1].href = `${data.postLink}`;
   }
}

$('.random').click(function() {
   page = list[Math.floor(Math.random()*list.length)];
   meme(page);
})

//random();
