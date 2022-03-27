// Start At 9 PM
// Writer : #AmirLoL 
// Channel : @FiberTeam - @iRLords 
// LOL :()
const prompt = require("prompt-sync")();var Config = require('./config.json');const chalk = require("cli-color");const si = require('systeminformation');var cmd=require('node-cmd');const lolcatjs = require('lolcatjs');lolcatjs.options.seed = Math.round(Math.random() * 1000);lolcatjs.options.colors = true;const Sys = {};const { exit } = require("process");if (Config['Configed'] == false) {const fs = require('fs');console.log(chalk.red('[!]')+chalk.green(' You Do Not Configer !'));const DisplayName = prompt(chalk.blue("[?]")+chalk.green(" Whats Your Display Name => "));const About = prompt(chalk.blue("[?]")+chalk.green(" Whats Your About => "));data = '{"Configed":true,"Name":"'+DisplayName+'","About":"'+About+'"}';fs.writeFile('config.json', data, (err) => { if (err) throw err; });lolcatjs.fromString('[!] OK Saved !\n[!] Please ReLaunch File !');}else{async function niceBytes(x){const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];let l = 0, n = parseInt(x, 10) || 0;while(n >= 1024 && ++l){n = n/1024;}return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);}async function getTime(time) {return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)}async function CmdGet(){c = chalk.green(Sys['OS']['hostname'])+chalk.cyan('$')+chalk.blue('───')+chalk.red('|')+chalk.yellow(new Date().getHours())+chalk.red(':')+chalk.yellow(new Date().getMinutes())+chalk.red('|')+chalk.blue('────')+chalk.red(chalk.bold('› '));inp = prompt(c);if (inp == 'Exit'){exit();}else if (inp == 'ReConfig') {lolcatjs.fromString('OK Please ReLaunch Script !');const fs = require('fs');fs.writeFile('config.json', '{"Configed":false,"Name":"","About":""}', (err) => { if (err) throw err; });}else if (inp != null && inp != '') {await console.log(await cmd.runSync(inp).data)}}async function Amir(){ console.clear();var figlet = require('figlet');figlet(Config['Name'], function(err, data) {if (err) {console.log('Error !');console.dir(err);return;}Sys['LoL'] = data});await GetInfo();await lolcatjs.fromString(`${Sys['LoL']}
┌ Information
├ Version : 1
├ Writer : #AmirLoL
├ Channel : @FiberTeam - @iRLords
├ Cpu ┐
│     ├ Model : ${Sys['Cpu']['manufacturer']} ${Sys['Cpu']['brand']}
│     ├ Gen : ${Sys['Cpu']['family']}
│     ├ Cores : ${Sys['Cpu']['cores']}
│     ├ Speed : ${Sys['Cpu']['speed']}
│     └ Cashe : ${await niceBytes(Sys['Cpu']['cache']['l3'])}
├ Memory ┐
│        ├ Total : ${await niceBytes(Sys['Mem']['total'])}
│        ├ Free : ${await niceBytes(Sys['Mem']['free'])}
│        └ Used : ${await niceBytes(Sys['Mem']['used'])}
├ OS ┐
│    ├ Platform : ${Sys['OS']['platform']}
│    ├ Name : ${Sys['OS']['distro']}
│    ├ User : ${Sys['OS']['hostname']}
│    ├ Build : ${Sys['OS']['build']}
│    └ UEFI : ${Sys['OS']['uefi']}
├ Connection : ${Sys['Network'][0]['iface']}
├ Storge ┐
│        ├ Type : ${Sys['Hard'][0]['type']}
│        ├ Name : ${Sys['Hard'][0]['name']}
│        ├ Size : ${await niceBytes(Sys['Hard'][0]['size'])}
│        └ Connection : ${Sys['Hard'][0]['interfaceType']}
└ Uptime : ${await getTime(Sys['Up'])}`);while (true){await CmdGet();}}async function GetInfo(){await si.cpu().then(data => Sys['Cpu'] = data);await si.mem().then(data => Sys['Mem'] = data);await si.osInfo().then(data => Sys['OS'] = data);await si.networkStats().then(data => Sys['Network'] = data);await si.diskLayout().then(data => Sys['Hard'] = data);Sys['Up'] = si.time().uptime;}Amir();}
// Writer : #AmirLoL 
// Channel : @FiberTeam - @iRLords 
// LOL :()
// EnD Of 12 PM