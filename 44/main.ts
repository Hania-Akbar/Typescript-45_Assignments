function make_Sandwitch(...items:string[]){
    console.log("\nMaking a sandwitch with the following items\n");
    items.forEach(firstitem =>
        console.log(firstitem)
        
    )
    console.log("\nplease  enjoy your sandwitch\n");
    
}
make_Sandwitch("Bread" , "butter")
make_Sandwitch("Chicken", "Cheese")
make_Sandwitch("tomato","chicken","mayo", "onion")