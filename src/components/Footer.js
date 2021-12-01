export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <div className="component-container light footer title-font"><h4>Alara Ayan &copy; {currentYear}</h4> </div>
    </>
  )
}