import { Typography } from '@mui/material'
import { ProjectsContainer, ProjectsContent, ProjectsDescription, ProjectsTitle } from '../../styles/projects'
import { Colors } from '../../styles/theme'
import CallUs from './CallUs'
import Project from './Project'

export default function Projects() {
  return (
    <>
      <ProjectsContainer>
        <ProjectsContent>
          <Typography variant='body1' sx={{ color: Colors.primary }}>
            Projects
          </Typography>
          <ProjectsTitle variant='h3'>
            Owner and investor with a reputation
          </ProjectsTitle>
          <ProjectsDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. 
          </ProjectsDescription>
        </ProjectsContent>
      </ProjectsContainer>
      <Project />
      <CallUs />
    </>
  )
}
