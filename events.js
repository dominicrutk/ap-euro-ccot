const events = {
    columbusLandsInAmerica: {
        name: 'Columbus Discovers America',
        startYear: 1492,
        endYear: 1492,
        latitude: 22.707657,
        longitude: -73.895284,
        category: 'change',
        description: [
            {
                type: 'p',
                text: `On October 12, 1492, Christopher Columbus and his crew aboard the <em>Pinta</em> spotted land. They had discovered San Salvador (the Bahamas), which is part of the New World. This discovery allowed for Spain, and the other European countries shortly thereafter, to exploit indigenous peoples for labor. In addition, American goods could be exported to Europe in the Columbian Exchange. Columbus's discovery of the New World marked a turning point in European history as the wealth of countries quickly swelled from the riches to be found in the Americas.`
            },
            {
                type: 'img',
                image: './img/columbusFleet.jpg',
                caption: `Christopher Columbus's fleet of three ships: <em>La Niña</em>, <em>La Pinta</em>, and <em>Santa María</em>. <a href="https://owlcation.com/humanities/Whatever-Happened-to-the-Nia-Pinta-and-Santa-Maria">Image source</a>`
            }
        ]
    },
    statueOfDavid: {
        name: 'Michelangelo Sculpts David',
        startYear: 1501,
        endYear: 1504,
        latitude: 43.783333,
        longitude: 11.25,
        category: 'change',
        description: [
            {
                type: 'p',
                text: `From 1501 to 1504, Renaissance artist Michelangelo sculpted one of the most famous pieces of Renaissance art. <em>David</em> depicts the nude Biblical hero David. It is one of the best examples of Renaissance art because its subject is derived from a Biblical story. In addition, it highlights the human form. Both of these ideas where characteristics of an emerging style of art: Renaissance art.`
            },
            {
                type: 'img',
                image: './img/statueOfDavid.jpg',
                caption: '<em>David</em> by Michelangelo is currently held at Galleria dell\'Accademia in Florence, Italy. <a href="https://en.wikipedia.org/wiki/David_(Michelangelo)">Image source</a>'
            }
        ]
    },
    ninetyFiveTheses: {
        name: `Martin Luther's Ninety-five Theses`,
        startYear: 1517,
        endYear: 1517,
        latitude: 51.866389,
        longitude: 12.637778,
        category: 'change',
        description: [
            {
                type: 'p',
                text: 'Indulgences were a practice in which the Catholic Church sold the good deeds of saints to ordinary people looking to avoid purgatory. They were often used by families with unbaptized babies that would otherwise end up in limbo. They cleansed the people that they were used on of (original) sin. Martin Luther, a German theologian, detested the sale of indulgences because it was an example of corruption in the Catholic Church.'
            },
            {
                type: 'img',
                image: './img/allSaintsChurchWittenberg.jpg',
                caption: 'The church door to which Luther nailed his <em>Ninety-five Theses</em> in the modern day. <a href="https://fotoeins.com/2017/01/16/lutherstadt-wittenberg-schlosskirche-castle-church/">Image source</a>'
            },
            {
                type: 'p',
                text: `On October 31, 1517, to express his displeasure with the Catholic Church, Luther nailed his <em>Ninety-fve Theses</em> to a church door in Wittenberg. The <em>Ninety-five Theses</em> outlined Luther's argument against the sale of indulgences. This October day is often considered the beginning of the Protestant Reformation, in which new religions such as Lutheranism and Calvinism split from Catholicism. The Protestant Reformation fundamentally changed the religious makeup of Europe, and it created a scapegoat for political wars in the 17<sup>th</sup> century.`
            }
        ]
    },
    transatlanticSlaveTrade: {
        name: 'Transatlantic Slave Trade',
        startYear: 1526,
        endYear: 1814,
        latitude: 13.441243,
        longitude: -16.719776,
        category: 'continuity',
        description: [
            {
                type: 'p',
                text: 'The transatlantic slave trade began in the late 16<sup>th</sup> century and ended in the early 19<sup>th</sup> century. It entailed the shipment of slaves from coastal African countries to plantations in the New World, especially in Brazil and the West Indies. In one major trade route, known as "triangular trade", African slaves were exported to the West Indies or Brazil to work on plantations. Then, raw materials were shipped from the plantations to New England or Europe, where they would be converted into manufactured goods, especially firearms, that were shipped back to Africa, thus starting the cycle over again.'
            },
            {
                type: 'img',
                image: './img/triangularTrade.png',
                caption: 'An image depicting the triangular trade route. <a href="https://en.wikipedia.org/wiki/Triangular_trade">Image source</a>'
            },
            {
                type: 'p',
                text: `The transatlantic slave trade had a profound impact on the economies and social hierarchies of Europe, Africa, and the New World. In the New World, plantation economies were dependent on the slave trade. In Europe, the slave trade led to a dramatic increase in wealth which allowed for innovation and an increase in quality of life. In Africa, the slave trade set a precedent for European control of the continent. In total, some 12 million slaves were shipped to the New World as part of the slave trade. The slave trade was a relatively constant factor in European life before the French Revolution.`
            }
        ]
    },
    onTheRevolutionsOfTheHeavenlySpheres: {
        name: 'On the Revolutions of the Heavenly Spheres',
        startYear: 1543,
        endYear: 1543,
        latitude: 49.45,
        longitude: 11.083333,
        category: 'change',
        description: [
            {
                type: 'p',
                text: `In 1543, German mathematician and natural philosopher Nicolaus Copernicus published his seminal work: <em>On the Revolutions of the Heavenly Spheres</em>. Before its publication, the predominant theory on the structure of the universe was Ptolemy's model. It was geocentric, meaning that the Earth was positioned in the center. The publication of <em>On the Revolutions of the Heavenly Spheres</em> first introduced Copernicus's heliocentric model. Although initially, this model was not widely adopted due to resistance from religious authorities, it is similar to the currently-accepted (heliocentric) model of the universe. More importantly, the publication of this model is often cited as the beginning of the Scientific Revolution.`
            },
            {
                type: 'img',
                image: './img/geocentricVsHeliocentricModels.jpg',
                caption: `The difference between Ptolemy's geocentric model and Copernicus's heliocentric model. <a href="https://hendrianusthe.wordpress.com/2012/06/21/heliocentric-vs-geocentric/">Image source</a>`
            }
        ]
    },
    thirtyYearsWar: {
        name: `Thirty Years' War`,
        startYear: 1618,
        endYear: 1648,
        latitude: 51.9625,
        longitude: 7.625556,
        category: 'change',
        description: [
            {
                type: 'p',
                text: `The Thirty Years' War broke out in 1618 in Bohemia. The Holy Roman Emperor, Ferdinand, attempted to impose Catholic rule on Bohemian Protestants, but he was met with resistance. Over time, the war escalated, as it progressed through its four phases. What was initially a local, religious war became a continental, political war between the Habsburgs and the anti-Habsburg alliance of Sweden, Denmark, the Netherlands, several Holy Roman Empire territories, and France.`
            },
            {
                type: 'p',
                text: `The war concluded in 1648 with the Peace of Westphalia. The Peace of Westphalia restored the Peace of Augsburg of 1555, which allowed local rulers to determine the religion of their territories. In addition, Calvinism joined Catholicism and Lutheranism as a tolerated religion. The Peace of Westphalia provided a period of peace, albeit brief. It marked the end of the Reformation era.`
            },
            {
                type: 'img',
                image: './img/holyRomanEmpire.png',
                caption: 'The Peace of Westphalia gave each local prince the power to choose the religion of their domain, thus greatly strengthening the nobility at the expense of the Holy Roman Emperor. <a href="http://www.wikiwand.com/en/Holy_Roman_Empire">Image source</a>'
            }
        ]
    },
    observationsUponExperimentalPhilosophy: {
        name: 'Observations upon Experimental Philosophy',
        startYear: 1666,
        endYear: 1666,
        latitude: 54.966667,
        longitude: -1.6,
        category: 'continuity',
        description: [
            {
                type: 'p',
                text: 'Margaret Cavendish, Duchess of Newcastle-upon-Tyne, published <em>Observations upon Experimental Philosophy</em> in 1666. She was one of the only female philosophers of her era. For the most part, women were totally excluded from intellectual pursuits until the late 19<sup>th</sup> century. Cavendish was the exception to this rule. In 1667, she became the first woman that was allowed to attend a meeting of the Royal Society of London.'
            },
            {
                type: 'img',
                image: './img/margaretCavendish.jpg',
                caption: `Cavendish was probably only able to achieve what she could as a woman because she was part of the nobility. A layperson could not reach her status. <a href="https://en.wikipedia.org/wiki/Margaret_Cavendish,_Duchess_of_Newcastle-upon-Tyne">Image source</a>`
            }
        ]
    },
    edictOfFontainebleau: {
        name: 'Edict of Fontainebleau',
        startYear: 1685,
        endYear: 1685,
        latitude: 48.804810,
        longitude: 2.120471,
        category: 'change',
        description: [
            {
                type: 'p',
                text: 'In 1685, King Louis XIV of France repealed the Edict of Nantes with the Edict of Fontainebleau. Huguenots (French Protestants) lost their right to practice Protestantism without persecution from the government. They were forced to flee, and the Protestant minority that had peacefully resided in France for decades suddenly declined. Louis repealed the Edict of Nantes in the name of political unity. It was a prime example of political absolutism at work since the strong monarchy took power away from local governments and peoples.'
            },
            {
                type: 'img',
                image: './img/versailles.jpg',
                caption: 'The Palace of Versailles was used by the Sun King, Louis XIV, to consolidate power in the monarchy by making him look powerful. <a href="http://en.chateauversailles.fr/">Image source</a>'
            }
        ]
    },
    americanRevolution: {
        name: 'American Revolution',
        startYear: 1765,
        endYear: 1783,
        latitude: 39.948889,
        longitude: -75.15,
        category: 'change',
        description: [
            {
                type: 'p',
                text: 'The American Revolution began in 1765 after the conclusion of the Seven Years’ War. Britain was millions of pounds in debt and felt that the American colonists should foot the bill, given that they were the chief beneficiaries of the war. The colonists refused to pay without Parliamentary representation, so on July 4, 1776, the Second Continental Congress declared independence from Great Britain as the United States of America. Led by George Washington, the United States fought in the American Revolutionary War until the Treaty of Paris in 1783. Many American political ideals made their way to Europe in 1789 when the French Revolution, which was inspired by the American Revolution, began.'
            },
            {
                type: 'img',
                image: './img/unitedStates1783Map.jpg',
                caption: 'A map of the United States in 1783, the year in which the United States vanquished Great Britain in the American Revolutionary War. <a href="https://www.pinterest.com/pin/22447698120962048/">Image source</a>'
            }
        ]
    },
    pugachevsRebellion: {
        name: `Pugachev's Rebellion`,
        startYear: 1773,
        endYear: 1775,
        latitude: 51.7667,
        longitude: 55.1,
        category: 'continuity',
        description: [
            {
                type: 'p',
                text: `From 1773 to 1775, a Russian serf by the name of Yemelyan Pugachev orchestrated a massive rebellion of Russian serfs against their masters. For three years, southern Russia descended into turmoil. Peasants rose up violently, feeling that they were being treated unfairly by their masters. However, in 1775, the rebellion was mercilessly crushed by the Russian monarchy. Although Pugachev's Rebellion inspired similar, smaller peasant rebellions across Eastern Europe, its true significance was that it demonstrated that peasant life did not change much at all over this era. Life as a peasant was so miserable that peasants felt a constant urge to rebel against their masters.`
            },
            {
                type: 'img',
                image: './img/pugachevsRebellion.jpg',
                caption: `A depiction of serfs rebelling against their master during Pugachev's Rebellion. <a href="https://www.rbth.com/history/326277-5-questions-about-pugachevs-rebellion">Image source</a>`
            }
        ]
    }
};
