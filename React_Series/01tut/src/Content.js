const Content = () => {
    const handleNameChange = ()=> {
        const names = ["James", "Tom", "Bob", "Grace"]
        const int = Math.floor(Math.random()*4)
        return names[int ]
      }
    
    return (
        <main>
            <p>Hello {handleNameChange()}</p>
        </main>
    )
}

export default Content;