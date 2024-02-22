function rando(){
   const names = ['Ethan','Max','Bob','Harold','Grace','Oliva','Ava','Nate','Sarah','Larry'];
   return{
    get name() {
        return names[Math.floor(Math.random() * names.length)];
    },
   }
}