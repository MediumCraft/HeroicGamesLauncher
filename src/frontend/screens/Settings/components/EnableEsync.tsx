import React from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleSwitch } from 'frontend/components/UI'
import { useSharedConfig } from 'frontend/hooks/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const EnableEsync = () => {
  const { t } = useTranslation()

  const [enableEsync, setEnableEsync] = useSharedConfig('eSync')

  return (
    <div className="toggleRow">
      <ToggleSwitch
        htmlId="esyncToggle"
        value={enableEsync || false}
        handleChange={async () => setEnableEsync(!enableEsync)}
        title={t('setting.esync', 'Enable Esync')}
      />

      <FontAwesomeIcon
        className="helpIcon"
        icon={faCircleInfo}
        title={t(
          'help.esync',
          'Esync aims to reduce wineserver overhead in CPU-intensive games. Enabling may improve performance.'
        )}
      />
    </div>
  )
}

export default EnableEsync
