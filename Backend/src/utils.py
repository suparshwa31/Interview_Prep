from fastapi import HTTPException
from clerk_backend_api import Clerk, AuthenticateRequestOptions, ClerkException
import os
from dotenv import load_dotenv

load_dotenv()

clerk_sdk = Clerk(bearer_auth=os.getenv("CLERK_SECRET_KEY"))

def authenticate_and_get_user_details(request):
    try:
        request_state = clerk_sdk.authenticate_request(
            request,
            AuthenticateRequestOptions(
                authorized_parties=[
                    "https://interview-prep-gray-eta.vercel.app/",
                    "https://interview-prep-suparshwa31s-projects.vercel.app/",
                    "https://interview-prep-git-main-suparshwa31s-projects.vercel.app/"
                ],
                jwt_key=os.getenv("JWT_KEY")
            )
        )

        if not request_state.is_signed_in:
            raise HTTPException(status_code=401, detail="Invalid or missing token")

        user_id = request_state.payload.get("sub")
        return {"user_id": user_id}

    except ClerkException as e:
        # SDK specific errors, treat as auth failure
        raise HTTPException(status_code=401, detail="Authentication failed: " + str(e))
    except Exception as e:
        # Other unexpected errors
        raise HTTPException(status_code=500, detail="Internal server error")
