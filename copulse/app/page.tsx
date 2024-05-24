import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div className=' flex flex-col gap-y-4'>
      <div>
      This is a screen for Authenticated users only
      </div>
      <div>
      <UserButton />
      </div>
    </div>

  )
}

export default page