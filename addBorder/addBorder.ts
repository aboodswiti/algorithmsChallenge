export function addBorder(picture: string[]): string[] {
    const wall = "*".repeat(picture[0].length + 2);
    
    for(const i in picture){
        picture[i] = "*".concat(picture[i],"*")
    }
    picture.unshift(wall)
    picture.push(wall)
 
    return picture
}

console.log(addBorder(["abc", "ded"]));


//Secound Solution

// export function addBorder(picture: string[]): string[] {
//     const lengthOfWall: Number = picture[0].length + 2;
    
//     let border = []
// let edges = ''
//     for ( let i = 0 ; i< lengthOfWall ; i++){
//         edges += "*"
//     }
//     border.push(edges)

//     for(const item of picture){
//         border.push("*" + item + "*")
//     }
//     border.push(edges)
//     console.log(border)

// }