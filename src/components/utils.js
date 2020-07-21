function createData(asyncFn) {
    let status = 'pending'
    let result
    let promise = asyncFn().then(
      r => {
        status = 'success'
        result = r
      },
      e => {
        status = 'error'
        result = e
      },
    )
    console.log(asyncFn)
    return {
      read() {
        if (status === 'pending') throw promise
        if (status === 'error') throw result
        if (status === 'success') return result
        throw new Error('This should be impossible')
      },
    }
  }

  export default createData
