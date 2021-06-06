
var arr =['X','X','O',
           'O','O','X',
           'O','O','O',
        ];

const arr2= [
    ['X'],['X'],['X'],
    ['O'],['X'],['O'],
    ['X'],['O'],['X'],
];
var arr3= arr2.concat();
var arr1 = Array(9).fill(null);
console.log(arr2);
class JustTesting extends React.Component {
    render() {
        const Winner = Calculutre(arr3);
        return (
            Winner
        );
    }
}

function Calculutre(arr3) {
    var lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i=0;i<lines.length;i++)
    {
        const [a,b,c] = lines[i];
        if(arr3[4][0]===arr3[2][0])
        {
            return   arr3[4][0];
        }
    
            
    
        
    }
    return null;

}
 
    ReactDOM.render(
        <JustTesting />,
        document.getElementById('root')
    );



