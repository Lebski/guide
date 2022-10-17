"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[4645],{5162:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7294),o=t(6010),l="tabItem_Ymn6";function m(e){var n=e.children,t=e.hidden,m=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,m),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(7462),o=t(7294),l=t(6010),m=t(2389),i=t(7392),d=t(7094),r=t(2466),s="tabList__CuJ",p="tabItem_LNqP";function c(e){var n,t,m=e.lazy,c=e.block,u=e.defaultValue,h=e.values,g=e.groupId,f=e.className,k=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.l)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===u?u:null!=(n=null!=u?u:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==_&&!b.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,d.U)(),C=N.tabGroupChoices,w=N.setTabGroupChoices,v=(0,o.useState)(_),H=v[0],x=v[1],T=[],E=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var M=C[g];null!=M&&M!==H&&b.some((function(e){return e.value===M}))&&x(M)}var D=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==H&&(E(n),x(a),null!=g&&w(g,String(a)))},W=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,o=T.indexOf(e.currentTarget)+1;t=null!=(a=T[o])?a:T[0];break;case"ArrowLeft":var l,m=T.indexOf(e.currentTarget)-1;t=null!=(l=T[m])?l:T[T.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var n=e.value,t=e.label,m=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:H===n?0:-1,"aria-selected":H===n,key:n,ref:function(e){return T.push(e)},onKeyDown:W,onFocus:D,onClick:D},m,{className:(0,l.Z)("tabs__item",p,null==m?void 0:m.className,{"tabs__item--active":H===n})}),null!=t?t:n)}))),m?(0,o.cloneElement)(k.filter((function(e){return e.props.value===H}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==H})}))))}function u(e){var n=(0,m.Z)();return o.createElement(c,(0,a.Z)({key:String(n)},e))}},8624:function(e,n,t){t.d(n,{v:function(){return l}});var a=t(7294),o=t(7674),l=Object.assign({},o.TW,{profiles:{bob:{author:"BobDotCom",avatar:"/img/bob.png",roleColor:"#2cd6f7"},robocord:{author:"Robocord",avatar:"/img/robocord.png",roleColor:"#9b59b6",bot:!0},dorukyum:{author:"Dorukyum",avatar:"/img/dorukyum.png",roleColor:"#2cd6f7"}}});n.Z=function(e){var n=e.options,t=void 0===n?l:n,m=e.children;return a.createElement(o.qs.Provider,{value:t},a.createElement(o.dZ,null,m))}},9999:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return g}});var a=t(7462),o=t(3366),l=(t(7294),t(3905)),m=t(7674),i=t(8624),d=t(5488),r=t(5162),s=["components"],p={title:"Help Command"},c=void 0,u={unversionedId:"extensions/commands/help-command",id:"extensions/commands/help-command",title:"Help Command",description:"Pycord's commands extension comes with a built-in help command. In this guide, we will take a look at them as well as learn how to create your own. Let's dive in!",source:"@site/docs/extensions/commands/help-command.mdx",sourceDirName:"extensions/commands",slug:"/extensions/commands/help-command",permalink:"/extensions/commands/help-command",draft:!1,editUrl:"https://github.com/Pycord-Development/guide/tree/main/docs/extensions/commands/help-command.mdx",tags:[],version:"current",lastUpdatedBy:"Dorukyum",lastUpdatedAt:1660148947,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{title:"Help Command"},sidebar:"defaultSidebar",previous:{title:"Command Groups",permalink:"/extensions/commands/groups"},next:{title:"Prefixed Commands",permalink:"/extensions/commands/prefixed-commands"}},h={},g=[{value:"The Wrong Way",id:"the-wrong-way",level:2},{value:"Types of Help Commands",id:"types-of-help-commands",level:2},{value:"Updating Built-in Help Commands",id:"updating-built-in-help-commands",level:2},{value:"Creating Your Help Command",id:"creating-your-help-command",level:2},{value:"Bot Help",id:"bot-help",level:3},{value:"Command Help",id:"command-help",level:3},{value:"Cog Help",id:"cog-help",level:3},{value:"Group Help",id:"group-help",level:3},{value:"Command Attributes",id:"command-attributes",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Credits",id:"credits",level:2}],f={toc:g};function k(e){var n=e.components,t=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Pycord's ",(0,l.kt)("inlineCode",{parentName:"p"},"commands")," extension comes with a built-in help command. In this guide, we will take a look at them as well as learn how to create your own. Let's dive in!"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This guide demonstrates using object-oriented programming and subclassing to make a help command for your\nPycord bot. It is important to understand these two concepts before continuing."),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Learning Resources"),":"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_classes.asp"},"W3Schools - Python Subclassing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_inheritance.asp"},"W3Schools - Python Inheritance")))),(0,l.kt)("h2",{id:"the-wrong-way"},"The Wrong Way"),(0,l.kt)("p",null,"A popular way to create a help command is to disable the built-in help command and create your own. This is not recommended as it will lead to a lot of confusion."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="The Wrong Way"',title:'"The',Wrong:!0,'Way"':!0},"bot = commands.Bot(command_prefix='!', help_command=None)\n# OR\nbot.help_command = None\n# OR\nbot.remove_command(\"help\")\n\n@bot.command()\nasync def help(ctx, *, argument=None):\n  ...\n")),(0,l.kt)("p",null,"While it's possible to create a help command this way, doing so does not utilize the full capabilities\nof making one with Pycord. Making a help command with subclassing and OOP will save time and effort."),(0,l.kt)("h2",{id:"types-of-help-commands"},"Types of Help Commands"),(0,l.kt)("p",null,"There are two types of built-in help commands:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.pycord.dev/en/master/api.html#discord.ext.commands.DefaultHelpCommand"},(0,l.kt)("inlineCode",{parentName:"a"},"DefaultHelpCommand"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.pycord.dev/en/master/api.html#discord.ext.commands.MinimalHelpCommand"},(0,l.kt)("inlineCode",{parentName:"a"},"MinimalHelpCommand")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DefaultHelpCommand")," is the command enabled by default. It isn't the best looking, but ",(0,l.kt)("inlineCode",{parentName:"p"},"MinimalHelpCommand")," can help make it look a bit better."),(0,l.kt)(d.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{label:"Default Help Command",value:"default",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Default Help Command"',title:'"Default',Help:!0,'Command"':!0},"import discord\nfrom discord.ext import commands\n\nbot = commands.Bot(command_prefix='!', help_command=commands.DefaultHelpCommand()) # help_command is DefaultHelpCommand by default so it isn't necessary to enable it like this\n# We enable it here for the sake of understanding\n\n...\n\nbot.run(\"token\")\n")),(0,l.kt)(i.Z,{mdxType:"DiscordComponent"},(0,l.kt)(m.kK,{profile:"bob",mdxType:"DiscordMessage"},"!help"),(0,l.kt)(m.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,l.kt)("code",null,"No Category:",(0,l.kt)("br",null),(0,l.kt)("div",{style:{paddingLeft:"2em"}},"!help Shows this message",(0,l.kt)("br",null),"!ping"),(0,l.kt)("br",null),"Type !help command for more info on a command.",(0,l.kt)("br",null),"You can also type !help category for more info on a category.")))),(0,l.kt)(r.Z,{label:"Minimal Help Command",value:"minimal",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Minimal Help Command"',title:'"Minimal',Help:!0,'Command"':!0},"import discord\nfrom discord.ext import commands\n\nbot = commands.Bot(command_prefix='!', help_command=commands.MinimalHelpCommand())\n\n...\n\nbot.run(\"token\")\n")),(0,l.kt)(i.Z,{mdxType:"DiscordComponent"},(0,l.kt)(m.kK,{profile:"bob",mdxType:"DiscordMessage"},"!help"),(0,l.kt)(m.kK,{profile:"robocord",mdxType:"DiscordMessage"},"Use ",(0,l.kt)("code",null,"!help \\[command]")," for more info on a command.",(0,l.kt)("br",null),"You can also use ",(0,l.kt)("code",null,"!help \\[category]")," for more info on a category.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",null," ",(0,l.kt)("u",null,"No Category")," "),(0,l.kt)("br",null),"help ping")))),(0,l.kt)("h2",{id:"updating-built-in-help-commands"},"Updating Built-in Help Commands"),(0,l.kt)("p",null,"Let's try to make the ",(0,l.kt)("inlineCode",{parentName:"p"},"MinimalHelpCommand")," look better. We can do this by putting its content in an\nembed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Minimal Help Command Example"',title:'"Minimal',Help:!0,Command:!0,'Example"':!0},"bot = commands.Bot(command_prefix='!')\n\n\nclass MyNewHelp(commands.MinimalHelpCommand):\n    async def send_pages(self):\n        destination = self.get_destination()\n        for page in self.paginator.pages:\n            emby = discord.Embed(description=page)\n            await destination.send(embed=emby)\n\nbot.help_command = MyNewHelp()\n")),(0,l.kt)("p",null,"Let's go through the code."),(0,l.kt)("p",null,"First, we create a new class called ",(0,l.kt)("inlineCode",{parentName:"p"},"MyNewHelp"),". This class is a subclass of ",(0,l.kt)("inlineCode",{parentName:"p"},"MinimalHelpCommand"),"."),(0,l.kt)("p",null,"Next, we override the ",(0,l.kt)("inlineCode",{parentName:"p"},"send_pages")," method. This method is responsible for sending the help command to\nthe user. We override this method because we don't want to change the content of the pages, just how\nthey are sent."),(0,l.kt)("p",null,"We use the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_destination")," method to get the destination of the message. This is the channel or use that the help\ncommand is to be sent to."),(0,l.kt)("p",null,"We use the ",(0,l.kt)("inlineCode",{parentName:"p"},"paginator.pages")," property to get the different pages of the help command. We put the page\nin an embed, and then send the embed to the destination channel."),(0,l.kt)("p",null,"Finally, we set this as our new help command using ",(0,l.kt)("inlineCode",{parentName:"p"},"bot.help_command = MyNewHelp()"),"."),(0,l.kt)(i.Z,{mdxType:"DiscordComponent"},(0,l.kt)(m.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,l.kt)(m._h,{mdxType:"DiscordEmbed"},"Use ",(0,l.kt)("code",null,"!help \\[command]")," for more info on a command.",(0,l.kt)("br",null),"You can also use ",(0,l.kt)("code",null,"!help \\[category]")," for more info on a category.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",null," ",(0,l.kt)("u",null,"No Category")," "),(0,l.kt)("br",null),"help ping"))),(0,l.kt)("h2",{id:"creating-your-help-command"},"Creating Your Help Command"),(0,l.kt)("p",null,"Not satisfied with the built-in help commands? You can create your own!"),(0,l.kt)("p",null,"For this, we will subclass the ",(0,l.kt)("inlineCode",{parentName:"p"},"HelpCommand")," class."),(0,l.kt)("p",null,"There are 4 methods that we need to override:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HelpCommand.send_bot_help(mapping)")," that gets called with ",(0,l.kt)("inlineCode",{parentName:"li"},"<prefix>help")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HelpCommand.send_command_help(command)")," that gets called with ",(0,l.kt)("inlineCode",{parentName:"li"},"<prefix>help <command>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HelpCommand.send_group_help(group)")," that gets called with ",(0,l.kt)("inlineCode",{parentName:"li"},"<prefix>help <group>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HelpCommand.send_cog_help(cog)")," that gets called with ",(0,l.kt)("inlineCode",{parentName:"li"},"<prefix>help <cog>"))),(0,l.kt)("h3",{id:"bot-help"},"Bot Help"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Bot Help Example"',title:'"Bot',Help:!0,'Example"':!0},'class MyHelp(commands.HelpCommand):\n    async def send_bot_help(self, mapping):\n        embed = discord.Embed(title="Help")\n        for cog, commands in mapping.items():\n           command_signatures = [self.get_command_signature(c) for c in commands]\n           if command_signatures:\n                cog_name = getattr(cog, "qualified_name", "No Category")\n                embed.add_field(name=cog_name, value="\\n".join(command_signatures), inline=False)\n\n        channel = self.get_destination()\n        await channel.send(embed=embed)\n\nbot.help_command = MyHelp()\n')),(0,l.kt)("p",null,"Let's go through the code."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"First, we create a new class called ",(0,l.kt)("inlineCode",{parentName:"p"},"MyHelp"),". This class is a subclass of ",(0,l.kt)("inlineCode",{parentName:"p"},"HelpCommand"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Next, we override the ",(0,l.kt)("inlineCode",{parentName:"p"},"send_bot_help")," method. This method is responsible for sending the main help\ncommand to the user.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'We create an embed with the title "Help".')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We iterate through ",(0,l.kt)("inlineCode",{parentName:"p"},"mapping.items()"),", which returns a list of tuples, the first element being the\ncog and the second element being a list of commands.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"By using ",(0,l.kt)("inlineCode",{parentName:"p"},"self.get_command_signature(c)")," we get the signature of the command, also known as the\n",(0,l.kt)("inlineCode",{parentName:"p"},"parameters")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"arguments"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"There is a chance that the cog is empty, so we use ",(0,l.kt)("inlineCode",{parentName:"p"},"if command_signatures:"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We get the name of the cog using ",(0,l.kt)("inlineCode",{parentName:"p"},'getattr(cog, "qualified_name", "No Category")'),". This calls the\ncog's attribute ",(0,l.kt)("inlineCode",{parentName:"p"},"qualified_name"),' which returns "No Category" if the cog has no name.')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We add a field to the embed with the name of the cog and the value of the command signatures.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Finally, we send the embed to the channel."))),(0,l.kt)("p",null,"Let's improve the code a little."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Improved Bot Help Example"',title:'"Improved',Bot:!0,Help:!0,'Example"':!0},'class MyHelp(commands.HelpCommand):\n    def get_command_signature(self, command):\n        return \'%s%s %s\' % (self.context.clean_prefix, command.qualified_name, command.signature)\n\n    async def send_bot_help(self, mapping):\n        embed = discord.Embed(title="Help", color=discord.Color.blurple())\n\n        for cog, commands in mapping.items():\n           filtered = await self.filter_commands(commands, sort=True)\n           command_signatures = [self.get_command_signature(c) for c in filtered]\n\n           if command_signatures:\n                cog_name = getattr(cog, "qualified_name", "No Category")\n                embed.add_field(name=cog_name, value="\\n".join(command_signatures), inline=False)\n\n        channel = self.get_destination()\n        await channel.send(embed=embed)\n\nbot.help_command = MyHelp()\n')),(0,l.kt)("p",null,"Now the help command won't show commands that the user can't use, as well as aliases for commands.\nLet's get the help command to show command aliases."),(0,l.kt)("h3",{id:"command-help"},"Command Help"),(0,l.kt)("p",null,"This function is called when the user uses ",(0,l.kt)("inlineCode",{parentName:"p"},"<prefix>help <command>"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Command Help Example"',title:'"Command',Help:!0,'Example"':!0},'class MyHelp(commands.HelpCommand):\n    async def send_command_help(self, command):\n        embed = discord.Embed(title=self.get_command_signature(command), color=discord.Color.random())\n        if command.help:\n            embed.description = command.help\n        if alias := command.aliases:\n            embed.add_field(name="Aliases", value=", ".join(alias), inline=False)\n\n        channel = self.get_destination()\n        await channel.send(embed=embed)\n\nbot.help_command = MyHelp()\n')),(0,l.kt)("p",null,"Let's quickly go through the code we haven't discussed yet."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In line 3, we create an embed with a title the signature of the command (so that the title of the\nembed looks like ",(0,l.kt)("inlineCode",{parentName:"p"},"<command> <parameter> [parameter]"),"), and a random color.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In lines 4 and 5, we get the command's ",(0,l.kt)("inlineCode",{parentName:"p"},"help")," description and add it to the embed. The help description\nof a command can be specified in the docstrings of a command function. For example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'```python\n@bot.command()\nasync def ping(ctx):\n  """Returns the latency of the bot."""\n  await ctx.send(f"Pong! {round(bot.latency * 1000)}ms")\n```\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Line 6 is shorthand for"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"alias = command.aliases\nif alias:\n    ...\n\n# is the same as\n\nif alias := command.aliases:\n    ...\n")),(0,l.kt)("p",{parentName:"li"},"A very helpful (but not well-known) Python shorthand!")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In line 7, we get the aliases of the command and add them to the embed."))),(0,l.kt)("h3",{id:"cog-help"},"Cog Help"),(0,l.kt)("p",null,"This is pretty easy!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Custom Cog Help Example"',title:'"Custom',Cog:!0,Help:!0,'Example"':!0},'class MyHelp(commands.HelpCommand):\n    def get_command_signature(self, command):\n        return \'%s%s %s\' % (self.context.clean_prefix, command.qualified_name, command.signature)\n\n    async def send_cog_help(self, cog):\n        embed = discord.Embed(title=cog.qualified_name or "No Category", description=cog.description, color=discord.Color.blurple())\n\n        if filtered_commands := await self.filter_commands(cog.get_commands()):\n            for command in filtered_commands:\n                embed.add_field(name=self.get_command_signature(command), value=command.help or "No Help Message Found... ")\n\n        await self.get_destination().send(embed=embed)\n')),(0,l.kt)("p",null,"Once again, we create an embed, get the commands that the user can use, and add them to the embed."),(0,l.kt)("h3",{id:"group-help"},"Group Help"),(0,l.kt)("p",null,"Similar to the cog help, this is pretty easy!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title = "Custom Group Help Example"',title:!0,"":"",'"Custom':!0,Group:!0,Help:!0,'Example"':!0},"class MyHelp(commands.HelpCommand):\n    def get_command_signature(self, command):\n        return '%s%s %s' % (self.context.clean_prefix, command.qualified_name, command.signature)\n\n    async def send_group_help(self, group):\n        embed = discord.Embed(title=self.get_command_signature(group), description=group.help, color=discord.Color.blurple())\n\n        if filtered_commands := await self.filter_commands(group.commands):\n            for command in filtered_commands:\n                embed.add_field(name=self.get_command_signature(command), value=command.help or \"No Help Message Found... \")\n\n        await self.get_destination().send(embed=embed)\n")),(0,l.kt)("p",null,"Add all of these methods together and you have a fully functioning help command!"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to see the final code for this section"),(0,l.kt)("div",{class:"markdown-body"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The following code has been slightly edited from the tutorial version.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Custom Help Command Example"',title:'"Custom',Help:!0,Command:!0,'Example"':!0},'class SupremeHelpCommand(commands.HelpCommand):\n    def get_command_signature(self, command):\n        return \'%s%s %s\' % (self.context.clean_prefix, command.qualified_name, command.signature)\n\n    async def send_bot_help(self, mapping):\n        embed = discord.Embed(title="Help", color=discord.Color.blurple())\n        for cog, commands in mapping.items():\n            filtered = await self.filter_commands(commands, sort=True)\n            if command_signatures := [\n                self.get_command_signature(c) for c in filtered\n            ]:\n                cog_name = getattr(cog, "qualified_name", "No Category")\n                embed.add_field(name=cog_name, value="\\n".join(command_signatures), inline=False)\n\n        channel = self.get_destination()\n        await channel.send(embed=embed)\n\n    async def send_command_help(self, command):\n        embed = discord.Embed(title=self.get_command_signature(command) , color=discord.Color.blurple())\n        if command.help:\n            embed.description = command.help\n        if alias := command.aliases:\n            embed.add_field(name="Aliases", value=", ".join(alias), inline=False)\n\n        channel = self.get_destination()\n        await channel.send(embed=embed)\n\n    async def send_help_embed(self, title, description, commands): # a helper function to add commands to an embed\n        embed = discord.Embed(title=title, description=description or "No help found...")\n\n        if filtered_commands := await self.filter_commands(commands):\n            for command in filtered_commands:\n                embed.add_field(name=self.get_command_signature(command), value=command.help or "No help found...")\n\n        await self.get_destination().send(embed=embed)\n\n    async def send_group_help(self, group):\n        title = self.get_command_signature(group)\n        await self.send_help_embed(title, group.help, group.commands)\n\n    async def send_cog_help(self, cog):\n        title = cog.qualified_name or "No"\n        await self.send_help_embed(f\'{title} Category\', cog.description, cog.get_commands())\n\nbot.help_command = SupremeHelpCommand()\n')))),(0,l.kt)("h2",{id:"command-attributes"},"Command Attributes"),(0,l.kt)("p",null,"How can you add cooldowns, set aliases, and change the name of help commands? Command attributes can\nhelp you do all of that, and more!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Help Command Attributes"',title:'"Help',Command:!0,'Attributes"':!0},"attributes = {\n   'name': \"help\",\n   'aliases': [\"helpme\"],\n   'cooldown': commands.CooldownMapping.from_cooldown(3, 5, commands.BucketType.user),\n}\n\n# You need to use CooldownMapping.from_cooldown(rate, per, type)\n\nbot.help_command = MyHelp(command_attrs=attributes)\n")),(0,l.kt)("h2",{id:"error-handling"},"Error Handling"),(0,l.kt)("p",null,"When a user attempts to use a command that does not exist, we need to inform the user.\nWe can do this by overriding the ",(0,l.kt)("inlineCode",{parentName:"p"},"send_error_message")," function."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Custom Help Error Example"',title:'"Custom',Help:!0,Error:!0,'Example"':!0},'class MyHelp(commands.HelpCommand):\n    async def send_error_message(self, error):\n        embed = discord.Embed(title="Error", description=error, color=discord.Color.red())\n        channel = self.get_destination()\n\n        await channel.send(embed=embed)\n')),(0,l.kt)(i.Z,{mdxType:"DiscordComponent"},(0,l.kt)(m.kK,{profile:"bob",mdxType:"DiscordMessage"},"!help update_pycord"),(0,l.kt)(m.kK,{profile:"robocord",mdxType:"DiscordMessage"},(0,l.kt)(m._h,{embedTitle:"Error",borderColor:"#ff0000",mdxType:"DiscordEmbed"},"Command 'update_pycord' not found."))),(0,l.kt)("h2",{id:"credits"},"Credits"),(0,l.kt)("p",null,"Most of the content from this guide is from\n",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/InterStella0/b78488fb28cadf279dfd3164b9f0cf96"},"InterStella0's walkthrough guide on subclassing HelpCommand"),".\nThanks to InterStella0 for making this guide amazing."),(0,l.kt)("admonition",{title:"Related Topics",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../Popular-Topics/subclassing-bots"},"Subclassing Bots")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./prefixed-commands"},"Prefixed Commands")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../popular-topics/cogs"},"Cogs")))))}k.isMDXComponent=!0}}]);