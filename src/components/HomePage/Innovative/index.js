import {
  InnovativeContainer,
  InnovativeContent,
  InnovativeItem,
  InnovativeItemDescription,
  InnovativeTitle,
} from '../../../styles/homepage/innovative'
import CodeIcon from '@mui/icons-material/Code'
import CampaignIcon from '@mui/icons-material/Campaign';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

export default function Innovative() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <InnovativeContainer>
      {/* Title  */}
      <InnovativeTitle variant={matches ? 'h5': 'h4'}>Innovative Execution</InnovativeTitle>
      {/* main content  */}
      <InnovativeContent>
        {/* item-1  */}
        <InnovativeItem>
          <DesignServicesIcon
            sx={{
              padding: '10px',
              background: '#678C92',
              color: 'white',
              borderRadius: '5px',
            }}
          />
          <InnovativeTitle
            variant='h6'
            sx={{ textAlign: 'left', padding: '10px 0px' }}
          >
            Featured Listing
          </InnovativeTitle>
          <InnovativeItemDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </InnovativeItemDescription>
        </InnovativeItem>
        {/* item-2  */}
        <InnovativeItem>
          <CodeIcon
            sx={{
              padding: '10px',
              background: '#678C92',
              color: 'white',
              borderRadius: '5px',
            }}
          />
          <InnovativeTitle
            variant='h6'
            sx={{ textAlign: 'left', padding: '10px 0px' }}
          >
            Available Properties
          </InnovativeTitle>
          <InnovativeItemDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </InnovativeItemDescription>
        </InnovativeItem>
        {/* item-3  */}
        <InnovativeItem>
          <CampaignIcon
            sx={{
              padding: '10px',
              background: '#678C92',
              color: 'white',
              borderRadius: '5px',
            }}
          />
          <InnovativeTitle
            variant='h6'
            sx={{ textAlign: 'left', padding: '10px 0px' }}
          >
            In the News
          </InnovativeTitle>
          <InnovativeItemDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </InnovativeItemDescription>
        </InnovativeItem>
      </InnovativeContent>
    </InnovativeContainer>
  )
}
