export default function handler(req, res) {
  console.log(req.method);
  const id = req.query;
  console.log(id);

  const posts = [
    {
      userId: 1,
      it: 1,
      title: "are or do repels provide blacked out except option criticizes",
      body: "because he also accepts\nundertakes the consequences of refusal and when\nhe criticizes the troubles so that the whole\nof our things are but they are the matter will happen to the architect",
    },
    {
      userId: 1,
      it: 2,
      title: "who is being",
      body: "it is in the time of life that things should be followed; no pain will blame the blessed ones; nor will they flee from the flattery of the pleasure; nor will there be any trouble to reject them; we shall not be open to them; we shall not be able to do so, but there is nothing.",
    },
    {
      userId: 1,
      it: 3,
      title: "she repels troubles as if she were training, whoever she is",
      body: "and just but by what right\nthe lust of every one who chooses to be blinded, or to the\nlust of pains or accusers, who is spared",
    },
    {
      userId: 1,
      it: 4,
      title: "and he is blinded",
      body: "by rejecting any and often to gain pleasure\nbut it is easy to assume the fault of things\nwhoever does not know the benefits here is bound by the thing and the pain itself by right\nwhosoever wants the pleasure of things",
    },
    {
      userId: 1,
      it: 5,
      title: "they don't know what they hate",
      body: "Let him seek forgiveness for repudiation, but there are other things, or let him flee, but it is, but there is pleasure, we can all be pleasures; there is no pain, nor is it held",
    },
    {
      userId: 1,
      it: 6,
      title: "I will open them to great pain because",
      body: "may it please some with pain that the things of life are great, for who is great, who is whom, whom no one often repels, because they are to follow them, but those things which",
    },
    {
      userId: 1,
      it: 7,
      title: "but the great easy",
      body: "may it please some with pain that the things of life are great, for who is great, who is whom, whom no one often repels, because they are to follow them, but those things which",
    },
    {
      userId: 1,
      it: 8,
      title: "pain is pain itself",
      body: "I will open to the most worthy the pain that accepts him\nsome of the easy-minded ones who are able to accept\nthe great elders\nself as comfortable pain of the pleasures of manner or life",
    },
    {
      userId: 1,
      it: 9,
      title:
        "they do not know the right of all the pain of the times and accusers",
      body: "the mind will not know the truth of pain, not because I will come to the fact that it is not for us, or that they provide pleasure, but pleasure",
    },
    {
      userId: 1,
      it: 10,
      title: "the choice of trouble because him",
      body: "however expedient ways with duties or great pains that are to be rejected",
    },
    {
      userId: 2,
      it: 11,
      title: "and indeed because those who praise",
      body: "and so it is either great\npresent because it hates both that and that pleasure and\nwise because it doesn't matter that you are blinded because that pleasure\nthey break that distinction is hatred",
    },
    {
      userId: 2,
      it: 12,
      title: "in some times he hates pain",
      body: "and so it is either great\npresent because it hates both that and that pleasure and\nwise because it doesn't matter that you are blinded because that pleasure\nthey break that distinction is hatred",
    },
    {
      userId: 2,
      it: 13,
      title: "and indeed because those who praise",
      body: "or we may say that flexibility is the pleasure of convenience, whereby the pain and pleasure of the corrupter rejecting the pleasure of those things, and that of choosing the smallest of labors, of enduring the refusal to assume, is further pursued by the architect himself",
    },
    {
      userId: 2,
      it: 14,
      title: "option to choose pleasure",
      body: "we flee and accuse him of suffering pains of pleasure\nnot of pain nor of making him\nnot that he who is blessed with pains and discomforts\nbut rather let all pleasure be to him",
    },
    {
      userId: 2,
      it: 15,
      title: "it will happen that times",
      body: "he will rebuke those whom he pleases\nhe wills the smallest duties, he prevents the pains of rejection, the trouble of rejecting the pleasures, because the chosen one will flee from these duties of life",
    },
    {
      userId: 2,
      it: 16,
      title: "and indeed because those who praise",
      body: "for it accepts only where I open it, or it escapes those who are more open to greater pleasures, because any one's pleasure, which is in other things, results in a great softness; we accuse it unless it is called pleasure",
    },
    {
      userId: 2,
      it: 17,
      title: "pleasure flees but troubles provide pleasure",
      body: "the pleasure and or the birth of them hates them, and the flight of any trouble is not born.",
    },
    {
      userId: 2,
      it: 18,
      title: "with pleasure and therefore indeed times of trouble",
      body: "it will come to pass that one will obtain the whole of one's labors, not pain, and it is to be rejected; there is no pleasure or debt, and great",
    },
    {
      userId: 2,
      it: 19,
      title: "may he be accepted or rejected who",
      body: "he who with desire provides for a great",
    },
    {
      userId: 2,
      it: 20,
      title: "and indeed because those who praise",
      body: "we lead those who follow, we can have anyone like this, and then he takes up the exercise itself, or flees from the exercise of the duties of the truth, or flees from the necessity of the whole.",
    },
    {
      userId: 3,
      it: 21,
      title:
        "they are more difficult than pleasures of the least kind because they are",
      body: "repels some of the pain of the present with which\nbut not the whole less therefore\nwith no effort there are troubles pain will come here to be refused forgiveness\ntimes and holdings are expedient",
    },
    {
      userId: 3,
      it: 22,
      title: "I will explain why they are in pain because of rudeness",
      body: "those who take up the very thing itself or\nbut all do not hate\nthe ease of their discomfort or take up the thing\nthat prevents it from being",
    },
    {
      userId: 3,
      it: 23,
      title: "the most important thing in life is nothing ever",
      body: "of the truth from which there is no choosing\nwhich is the architect of which neither life\nnot is the times and the pain flees that\nnot even the bliss to follow any but you are bound to see",
    },
    {
      userId: 3,
      it: 24,
      title: "but here are labor pains occur",
      body: "for and from no\npleasure, because those who\nobtain pleasure are never any\nto refuse it, leaving the most deserving or rather harsher",
    },
    {
      userId: 3,
      it: 25,
      title: "and indeed because those who praise",
      body: "any consequence that\nwhosoever it may be or the consequences\nof the very trouble of choosing and all our error\nof trouble at that time because of the distinction",
    },
    {
      userId: 3,
      it: 26,
      title: "there is also what hates who does not",
      body: "we accuse nothing of being similar to pains\nnames that result in the flight of pain, blame flees in times of refusal\nperceived as praisers\nnames of trouble or truth",
    },
    {
      userId: 3,
      it: 27,
      title: "as if that and them are bound, or by",
      body: "but we can be blinded by the pains itself\nby the debts of those who like them or hate them easily",
    },
    {
      userId: 3,
      it: 28,
      title: "chosen to follow any and no pleasure of the body",
      body: "He does not ask for the whole refusal of the elders, or the softness of the flattery that he gives pleasure to pleasures, and like us to him",
    },
    {
      userId: 3,
      it: 29,
      title: "and indeed because those who praise",
      body: "he hates the great as often but not who\ntimes and nothingwe blame him with pains that painhe hates the rejection of the great and the like but with the elders",
    },
    {
      userId: 3,
      it: 30,
      title: "from which the great and the like bear",
      body: "others pain will not be hindered by flattery, so much hate will come to flattery, who will love his times, because they provide for the fact that you can see that",
    },
    {
      userId: 4,
      it: 31,
      title: "any such thing as either or both",
      body: "because of his debts, but for some people, no one can succeed in life. It prevents him from succeeding, but in fact it is ours to obtain the elders and to obtain the pleasure of repudiating him.",
    },
    {
      userId: 4,
      it: 32,
      title: "and that pain are something",
      body: "they leave those who are harsher than us and here\n is the option of repelling the debt\nfor any reason to make them blessed by some greater distinction\ntheir pleasures and or obtain those greater pleasures most of all",
    },
    {
      userId: 4,
      it: 33,
      title: "who will explain the pain of trouble",
      body: "things that he never hates toil is to be\nand who are in",
    },
    {
      userId: 4,
      it: 34,
      title: "great as the law of things",
      body: "she wants to endure them so that pleasure is equal to pleasure, pleasure is equal to pleasure in every person, but great times are the smallest in the distinction that those who accuse us of assuming the most worthy duties do not know for us",
    },
    {
      userId: 4,
      it: 35,
      title:
        "it is of no consequence that they provide for the troubles of the mind",
      body: "unless we can choose the error of choosing life\nplease them with the desire of these easy to criticize the pleasure of the blessed\nwe lead in such a way that the pleasure of choosing\nnot for us because it flees",
    },
  ];

  if (req.method == "GET") {
    // get  req for all blogs
    console.log(id);
    res.status(200).json(posts);
  }
}
