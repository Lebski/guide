"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[7645],{5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o=n(6010),i="tabItem_Ymn6";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),o=n(7294),i=n(6010),r=n(2389),s=n(7392),l=n(7094),d=n(2466),m="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n,r=e.lazy,p=e.block,u=e.defaultValue,h=e.values,y=e.groupId,f=e.className,b=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,l.U)(),w=C.tabGroupChoices,x=C.setTabGroupChoices,N=(0,o.useState)(v),T=N[0],S=N[1],_=[],D=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var O=w[y];null!=O&&O!==T&&k.some((function(e){return e.value===O}))&&S(O)}var Z=function(e){var t=e.currentTarget,n=_.indexOf(t),a=k[n].value;a!==T&&(D(t),S(a),null!=y&&x(y,String(a)))},E=function(e){var t,n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":var a,o=_.indexOf(e.currentTarget)+1;n=null!=(a=_[o])?a:_[0];break;case"ArrowLeft":var i,r=_.indexOf(e.currentTarget)-1;n=null!=(i=_[r])?i:_[_.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return _.push(e)},onKeyDown:E,onClick:Z},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function u(e){var t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},8624:function(e,t,n){n.d(t,{v:function(){return i}});var a=n(7294),o=n(7674),i=Object.assign({},o.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});t.Z=function(e){var t=e.options,n=void 0===t?i:t,r=e.children;return a.createElement(o.qs.Provider,{value:n},a.createElement(o.dZ,null,r))}},3606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return y}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=n(7674),s=n(8624),l=n(5488),d=n(5162),m=["components"],c={title:"Slash Commands",description:"Learn all about Slash Commands and how to implement them into your Discord Bot with Pycord!"},p=void 0,u={unversionedId:"interactions/application-commands/slash-commands",id:"interactions/application-commands/slash-commands",title:"Slash Commands",description:"Learn all about Slash Commands and how to implement them into your Discord Bot with Pycord!",source:"@site/docs/interactions/application-commands/slash-commands.mdx",sourceDirName:"interactions/application-commands",slug:"/interactions/application-commands/slash-commands",permalink:"/interactions/application-commands/slash-commands",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/interactions/application-commands/slash-commands.mdx",tags:[],version:"current",lastUpdatedBy:"Lala Sabathil",lastUpdatedAt:1673556110,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{title:"Slash Commands",description:"Learn all about Slash Commands and how to implement them into your Discord Bot with Pycord!"},sidebar:"defaultSidebar",previous:{title:"Localizations",permalink:"/interactions/application-commands/localizations"},next:{title:"UI Components",permalink:"/category/ui-components"}},h={},y=[{value:"Syntax",id:"syntax",level:2},{value:"Subcommand Groups",id:"subcommand-groups",level:2},{value:"Sub-groups",id:"sub-groups",level:2},{value:"Options &amp; Option Types",id:"options--option-types",level:2},{value:"Autocomplete",id:"autocomplete",level:2}],f={toc:y};function b(e){var t=e.components,c=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"On March 24, 2021, Discord added Slash Commands to Discord as an easier, more efficient, and better way of using bot commands. Pycord has implemented Slash Commands into the library, so it's simple, efficient, and familiar."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Remember that Slash Commands require your bot to be invited with the ",(0,i.kt)("inlineCode",{parentName:"p"},"application.commands")," scope or Slash Commands will not show up. Bots already in the guild can simply be invited again with the scope; there is no need to kick the bot.")),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"Let's create a simple Slash Command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import discord\n\nbot = discord.Bot()\n\n# we need to limit the guilds for testing purposes\n# so other users wouldn\'t see the command that we\'re testing\n\n@bot.command(description="Sends the bot\'s latency.") # this decorator makes a slash command\nasync def ping(ctx): # a slash command will be created with the name "ping"\n    await ctx.respond(f"Pong! Latency is {bot.latency}")\n\nbot.run("TOKEN")\n')),(0,i.kt)(s.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"ping")),"Pong! Latency is 335ms.")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Let's go through the code."),(0,i.kt)("p",null,"First, we import Pycord's ",(0,i.kt)("inlineCode",{parentName:"p"},"discord")," package."),(0,i.kt)("p",null,"Next, we create a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.Bot"},(0,i.kt)("inlineCode",{parentName:"a"},"discord.Bot"))," object and assign it to a variable ",(0,i.kt)("inlineCode",{parentName:"p"},"bot"),"."),(0,i.kt)("p",null,"We then go ahead and use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.Bot.command"},(0,i.kt)("inlineCode",{parentName:"a"},"@bot.command"))," decorator, which registers a new Slash Command. We pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," parameter to give a description to the Slash Command. We can also pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," parameter to change the Slash Command's name. By default, the name of the Slash Command will be the name of the function, in this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"/ping"),"."),(0,i.kt)("p",null,"We create an async function called ",(0,i.kt)("inlineCode",{parentName:"p"},"ping")," with parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx"),", which, when called, sends the bot's ping/latency using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.ApplicationContext.respond"},(0,i.kt)("inlineCode",{parentName:"a"},"ctx.respond")),"."),(0,i.kt)("h2",{id:"subcommand-groups"},"Subcommand Groups"),(0,i.kt)("p",null,"You might want to group certain commands together to make them more organised. A command group is exactly what it sounds like, a group of individual Slash Commands together."),(0,i.kt)("p",null,"In order to make a Slash Command group, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"bot.create_group")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import discord\n\nbot = discord.Bot()\n\n# create Slash Command group with bot.create_group\ngreetings = bot.create_group("greetings", "Greet people")\n\n@greetings.command()\nasync def hello(ctx):\n  await ctx.respond(f"Hello, {ctx.author}!")\n\n@greetings.command()\nasync def bye(ctx):\n  await ctx.respond(f"Bye, {ctx.author}!")\n\nbot.run("TOKEN")\n')),(0,i.kt)("p",null,"Or, you can instead manually make a ",(0,i.kt)("inlineCode",{parentName:"p"},"SlashCommandGroup")," class like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import discord\n\nmath = discord.SlashCommandGroup("math", "Math related commands")\n\n@math.command()\nasync def add(ctx, num1: int, num2: int):\n  sum = num1 + num2\n  await ctx.respond(f"{num1} plus {num2} is {sum}.")\n\n@math.command()\nasync def subtract(ctx, num1: int, num2: int):\n  sum = num1 - num2\n  await ctx.respond(f"{num1} minus {num2} is {sum}.")\n\n# you\'ll have to manually add the manually created Slash Command group\nbot.add_application_command(math)\n')),(0,i.kt)("p",null,"Here's what the registered subcommands will look like in the Slash Command Menu:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Picture of the subcommands in the Slash Command Menu",src:n(8336).Z,width:"1125",height:"316"})),(0,i.kt)("p",null,"You'll notice that there's the name of the Slash Command Group and then the name of the subcommand separated by a space."),(0,i.kt)("h2",{id:"sub-groups"},"Sub-groups"),(0,i.kt)("p",null,"We've made a subcommand group, but did you know that you could create a group inside another?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from discord import SlashCommandGroup\nfrom math import sqrt\n\nmath = SlashCommandGroup("math", "Math related commands")\nadvanced = math.create_subgroup("advanced", "Advanced math commands")\n\n@advanced.command()\nasync def square_root(ctx, x: int):\n    await ctx.respond(sqrt(x))\n\nbot.add_application_command(math)\n')),(0,i.kt)("p",null,"The command created above can be invoked by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"/math advanced square_root"),"."),(0,i.kt)("h2",{id:"options--option-types"},"Options & Option Types"),(0,i.kt)("p",null,"Whenever you're using Slash Commands, you might notice that you can specify parameters that the user has to set or can optionally set. These are called Options."),(0,i.kt)("p",null,"Since you want different inputs from Options, you'll have to specify the type for that Option. There are a few ways of doing this."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(d.Z,{value:"0",label:"Using Type Annotations",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"You could use Type Annotations and let Pycord figure out the option type, like shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import discord\n\nbot = discord.Bot()\n\n@bot.command()\n# pycord will figure out the types for you\nasync def add(ctx, first: discord.Option(int), second: discord.Option(int)):\n  # you can use them as they were actual integers\n  sum = first + second\n  await ctx.respond(f"The sum of {first} and {second} is {sum}.")\n\nbot.run("TOKEN")\n')),(0,i.kt)(s.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"add")),"The sum of 1 and 1 is 2."))),(0,i.kt)(d.Z,{value:"1",label:"Using the SlashCommandOptionType enum",mdxType:"TabItem"},(0,i.kt)("p",null,"You could also explicitly declare the type using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pycord.dev/en/stable/api.html#discord.SlashCommandOptionType"},(0,i.kt)("inlineCode",{parentName:"a"},"SlashCommandOptionType"))," enum."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Slash Command Type"',title:'"Slash',Command:!0,'Type"':!0},'import discord\n\nbot = discord.Bot()\n\n@bot.command()\n# this explicitly tells pycord what types the options are instead of it figuring it out by itself\nasync def join(\n  ctx,\n  first: discord.Option(discord.SlashCommandOptionType.string),\n  second: discord.Option(discord.SlashCommandOptionType.string)\n):\n  joined = first + second\n  await ctx.respond(f"When you join \\"{first}\\" and \\"{second}\\", you get: \\"{joined}\\".")\n\nbot.run("TOKEN")\n')),(0,i.kt)(s.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"join")),'When you join "Hello" and "World!", you get: "Hello World!"')))),(0,i.kt)("h2",{id:"autocomplete"},"Autocomplete"),(0,i.kt)("p",null,"Discord's autocomplete allows developers to determine option choices that are used in a slash command option. By defining a function, you can do this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"async def get_animal_types(ctx: discord.AutocompleteContext):\n  \"\"\"\n  Here we will check if 'ctx.options['animal_type']' is and check if it's a marine or land animal and return specific option choices\n  \"\"\"\n  animal_type = ctx.options['animal_type']\n  if animal_type == 'Marine':\n    return ['Whale', 'Shark', 'Fish', 'Octopus', 'Turtle']\n  else: # is land animal\n    return ['Snake', 'Wolf', 'Lizard', 'Lion', 'Bird']\n\n@bot.slash_command(name=\"animal\")\nasync def animal_command(ctx: discord.ApplicationContext, animal_type: discord.Option(str, choices=['Marine', 'Land']), animal: discord.Option(str, autocomplete=discord.utils.basic_autocomplete(get_animals)):\n  await ctx.respond(f'You picked an animal type of `{animal_type}` that led you to pick `{animal}`!')\n")),(0,i.kt)(s.Z,{mdxType:"DiscordComponent"},(0,i.kt)(r.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,i.kt)("div",{slot:"interactions"},(0,i.kt)(r.un,{profile:"bob",command:!0,mdxType:"DiscordInteraction"},"animal")),"You picked an animal type of ",(0,i.kt)("code",null,"Marine")," that led you to pick ",(0,i.kt)("code",null,"Shark"),"!")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Autocomplete can ",(0,i.kt)("strong",{parentName:"p"},"only")," be used with slash commands.")),(0,i.kt)("admonition",{title:"Related Topics",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../interactions"},"Interactions Index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../getting-started/rules-and-common-practices"},"Rules and Common Practices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../popular-topics/cogs"},"Cogs")))))}b.isMDXComponent=!0},8336:function(e,t,n){t.Z=n.p+"assets/images/groups-and-subcommands-b1cb2c609b03b7748a24b85c8a3ca2c4.jpg"}}]);