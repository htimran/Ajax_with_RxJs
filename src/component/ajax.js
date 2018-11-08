import React from "react"
import { streamProps } from "react-streams"
import { pipe} from "rxjs"
import { ajax } from "rxjs/ajax"
import { pluck, switchMap } from "rxjs/operators"

const getTodo = pipe(
  switchMap(({ url, id }) => ajax(`${url}/${id}`)),
  pluck("response")
)

const Todo = streamProps(getTodo)

const url = process.env.DEV
  ? "/api/todos"
  : "https://dandelion-bonsai.glitch.me/todos"

const Todo_ajax = () => {
    const id = [1,2,3]
    return(
        <div>
            <h2>Ajax Demo</h2>
            {
                id.map(val => {
                    return (
                        <Todo url={url} id={val} key={val}>
                            {({ text, id }) => (
                                <div>
                                {id}. {text}
                                </div>
                            )}
                        </Todo>
                    )
                })
            }            
        </div>
    )
}
export default Todo_ajax;