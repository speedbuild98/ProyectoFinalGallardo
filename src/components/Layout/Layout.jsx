// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <main className="min-h-screen py-20 px-5 flex flex-col items-center justify-center gap-5 md:px-32 max-w-[1440px] mx-auto">
      {children}
    </main>
  )
}

export default Layout