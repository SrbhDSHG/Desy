import { useState } from 'react'

export const useTabs = (initalTabs) => {
  const [activeTab, setActiveTab] = useState(initalTabs[0].text)
  const [tabSelected, setTabSelected] = useState(false)

  return {
    activeTab,
    setActiveTab,
    tabSelected,
    setTabSelected,
  }
}
