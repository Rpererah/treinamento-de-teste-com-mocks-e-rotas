import { renderHook } from "@testing-library/react"
import { useEffect, useState } from "react"

test('hooks',()=>{
    const {result}=renderHook(()=>{
        const [nome,setNome]=useState('')
        useEffect(()=>{
            setNome('Alice')
        },[])
        return nome;
    })

    expect(result.current).toBe('Alice')
})