import {
  InnovativeContainer,
  InnovativeContent,
  InnovativeItem,
  InnovativeItemDescription,
  InnovativeTitle,
} from '../../../styles/homepage/innovative'
import CodeIcon from '@mui/icons-material/Code'

export default function Innovative() {
  return (
    <InnovativeContainer>
      {/* Title  */}
      <InnovativeTitle variant='h4'>Innovative Execution</InnovativeTitle>
      {/* main content  */}
      <InnovativeContent>
        {/* item-1  */}
        <InnovativeItem>
          <CodeIcon sx={{padding: '10px', background: '#678C92', color: 'white', borderRadius: '5px'}} />
          <InnovativeTitle variant='h6' sx={{textAlign: 'left', padding: '10px 0px'}}>Featured Listing</InnovativeTitle>
          <InnovativeItemDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </InnovativeItemDescription>
        </InnovativeItem>
        {/* item-2  */}
        <InnovativeItem>
          <CodeIcon sx={{padding: '10px', background: '#678C92', color: 'white', borderRadius: '5px'}} />
          <InnovativeTitle variant='h6' sx={{textAlign: 'left', padding: '10px 0px'}}>Featured Listing</InnovativeTitle>
          <InnovativeItemDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </InnovativeItemDescription>
        </InnovativeItem>
        {/* item-3  */}
        <InnovativeItem>
          <CodeIcon sx={{padding: '10px', background: '#678C92', color: 'white', borderRadius: '5px'}} />
          <InnovativeTitle variant='h6' sx={{textAlign: 'left', padding: '10px 0px'}}>Featured Listing</InnovativeTitle>
          <InnovativeItemDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
          </InnovativeItemDescription>
        </InnovativeItem>
      </InnovativeContent>
    </InnovativeContainer>
  )
}
