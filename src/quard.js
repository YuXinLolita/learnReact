

    function Square (props){
        return (
            <button className='board_Button' 
            onClick = {props.onClick
            }>
                {props.value}
            </button>
        )
    }


class Board extends React.Component {

    
    
    readerSquare(i) {

        return (
            <Square 
            value={this.props.squares[i]} 
            onClick={() => 
            this.props.onClick(i)}
            />
           
        );
    }
    render() {
       
      
        return (
            <div>
    
            
                <div className='board_Row'>
                    {this.readerSquare(0)}
                    {this.readerSquare(1)}
                    {this.readerSquare(2)}
                </div>
                <div className='board_Row'>
                    {this.readerSquare(3)}
                    {this.readerSquare(4)}
                    {this.readerSquare(5)}
                </div>
                <div className='board_Row'>
                    {this.readerSquare(6)}
                    {this.readerSquare(7)}
                    {this.readerSquare(8)}
                </div>
                </div>
            
        )
    }

}

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            history:[{
                squares:Array(9).fill(null)
            }],
            stepNumber:0,
            xIsNext:true,

        };  
    }

    handleClick(i) {
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();

        if(calculateWinner(squares)||squares[i]){
            return ;
        }

        squares[i] = this.state.xIsNext?'X':'O';

        this.setState({
            history:history.concat([{
                squares:squares
            }]),
            stepNumber:history.length,
            xIsNext:!this.state.xIsNext,
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber:step,
            xIsNext:(step%2)===0,
        })
    }

   render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);


    const moves = history.map((step,move)=>{
        const desc = move?'回到第'+move+'步':'回到游戏开始';   
        
        return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>
                    {desc}
                </button>
            </li>
        );
    });

    let status;
    
    if(winner){
        status='获胜者：'+winner;
    }else{
        status='下一个玩家:'+(this.state.xIsNext?'X':'O');
    }

       return (
           <div className='NumberOne'>
               <div className='one_Board'>
                   <Board 
                   squares = {current.squares}
                   onClick = {(i) => this.handleClick(i)}
                   />

               </div>
               <div className='game_Info'>
                   <div id='status'>{status}</div>
                   
                    <ol>{moves}</ol>
                   
                   </div>

               </div>

        
       )
   }
}

  function calculateWinner (squares) {
      const lines = [
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6],
      ];

      for(let i =0;i<lines.length;i++) {
        const [a,b,c] = lines[i];
        if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]) {
           
            return (
                squares[a]

            );
        }
       /* if (calculateWinner(squares)){
           <div id='highLight'>{lines[i]}</div>
          
        }*/
      }
      return null;
  }
 
ReactDOM.render (
    <Game />,
    document.getElementById('root')
);

