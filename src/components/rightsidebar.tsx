
const rightsidebar = () => {
  return (
    <div>
      <aside className="hidden lg:block w-64 bg-muted border-l p-6">
      {/* Sample content block */}
      <div className="space-y-4">
        <div className="bg-white rounded-md shadow p-4">
          <h1 className="text-sm font-bold">Mission Statement</h1>
          <p className="mt-2">The design can be more user centric, try to tweak it a bit and go through the user story  once more</p>
        </div>

        <div className="bg-white rounded-md shadow p-4">
          <p className="text-sm text-muted-foreground">Conversions</p>
          <p className="text-xl font-bold mt-2">1,920</p>
        </div>
      </div>
      
     </aside>   
    </div>
  )
}

export default rightsidebar
