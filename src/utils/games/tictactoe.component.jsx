import { Fragment, useState } from 'react'
import './tictactoe.styles.scss'

const TicTacToe = () => {
    const [turn, setTurn] = new useState('X');
    const [cells, setCells ] = new useState(Array(9).fill(''));
    const [winner, setWinner] = new useState();
    const [green, setGreen] = new useState([]);

    const checkWinner = () => {
        let combinations = {
            row: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],

            col: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],

            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ]
    };

        for(let combos in combinations) {
            combinations[combos].forEach(element => {
                // console.log(element)
                if(
                    cells[element[0]]==='' ||
                    cells[element[1]]==='' ||
                    cells[element[2]]==='' 
                ) {
                    // continue;
                }
                else if(
                    cells[element[0]]==='X' &&
                    cells[element[1]]==='X' &&
                    cells[element[2]]==='X'
                ) {
                    console.log("X is the winner")
                    setGreen(element)
                    setWinner('X')
                }
                else if(
                    cells[element[0]]==='O' &&
                    cells[element[1]]==='O' &&
                    cells[element[2]]==='O'
                ) {
                    console.log("O is the winner")
                    setGreen(element)
                    setWinner('O')
                }
            });
        }
    }

    const handleClick = (position) => {
        // alert('test '+ position)
        if(winner==='X' || winner==='O')  {
            return
        }
        if(cells[position]!=='') {
            console.log("position not available")        
            return
        }
        // let squares = [...cells]

        console.log(position)
        if(turn === 'X') {
            setTurn('O')
            cells[position]='X'
            setCells(cells)
            checkWinner(cells)
            return
        }
        else {
            cells[position]='O'
            setTurn('X')
            setCells(cells)
            checkWinner(cells)
            return
        }
        // console.log("Before setcells",cells)
        // setCells(cells)
        // console.log(cells)
        // checkWinner(cells)
    }

    const Cell =({position})=> {
        return <td onClick={()=>handleClick(position)}>{cells[position]}</td>
    }
    
    return (
        <Fragment>
            <h2>Tic Tac Toe</h2> 
            <p
            >{turn}'s turn </p>
            <table className='container'>
                <tbody>
                    <tr>
                        <Cell position={0} />
                        <Cell position={1}/>
                        <Cell position={2}/>
                    </tr>
                    <tr>
                        <Cell position={3} />
                        <Cell position={4}/>
                        <Cell position={5}/>
                    </tr>
                    <tr>
                        <Cell position={6} />
                        <Cell position={7}/>
                        <Cell position={8}/>
                    </tr>
                </tbody>
            </table>
            {winner && <p>{winner} is Winner</p>}
            {green && <p>{green}</p>}
            <button onClick={()=>{
                setCells(Array(9).fill(''))
                setWinner()
                setTurn('X')
            }}>Play Again</button>
        </Fragment>
    )
}

export default TicTacToe;