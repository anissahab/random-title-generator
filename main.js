
const path1 = {
    verbs: ['be more', 'be less'],
    adjectives: ['approachable', 'excited about life', 'present in the moment', 'empathetic', 'trendy'],
    phrase() {
        verb = this.verbs[Math.floor(Math.random() * this.verbs.length)]
        adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)]
        return verb + ' ' + adjective
    }
}

const path2 = {
    verbs: ['start', 'stop'],
    actions: ['saving money', 'being productive', 'sleeping in', 'going to bed early', 'waking up at 5 am', 'journaling',
    'taking cold showers', 'eating lots of pizza', 'meditating', 'working out at night', 'drinking caffeine'],
    phrase() {
        verb = this.verbs[Math.floor(Math.random() * this.verbs.length)]
        action = this.actions[Math.floor(Math.random() * this.actions.length)]
        return verb + ' ' + action
    }
}

// the two pieces we need for our final function
const paths = [path1, path2];
const starters = ['How to', 'Why you should', 'A guide to' ];

// function that puts it all together
function createTitle(starters, paths){
    starter = starters[Math.floor(Math.random() * starters.length)];
    path = paths[Math.floor(Math.random() * paths.length)]
    return starter + ' ' + path.phrase()
}

console.log(createTitle(starters, paths));
