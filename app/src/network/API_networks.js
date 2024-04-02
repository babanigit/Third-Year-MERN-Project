/* eslint-disable no-unused-vars */

const authLink = "api/auth/";

async function fetchData(input, init) {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
    
  } else {
    const errorBody = await response.json();

    const errorMessage = errorBody.error;

    console.log("error from fetchData");
    throw new Error(errorMessage);

    // if(response.status===401) {
    //     throw new UnauthorizedError(errorMessage)
    // }else if(response.status===409) {
    //     throw new ConflictError(errorMessage);
    // }else{
    //     throw Error("request failed with status: " + response.status + " message "+ errorMessage);
    // }
  }
}

export async function getSignUp(Credential) {
    const response= await fetchData(authLink+"signup",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Credential),
    })
    return response.json();
}

export async function getSignIn(params) {
    
    const response= await fetchData(authLink+"signin",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Credential),
    });
    return response.json();
}