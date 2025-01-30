import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IconArrowUpRight } from "@tabler/icons-react";
import {
  Group,
  Paper,
  SimpleGrid,
  Text,
  Container,
  Button,
  Divider,
  Avatar,
  Tooltip,
} from "@mantine/core";
import classes from "./ProjectCard.module.css";

export function ProjectCard() {
  // Retrieve state from Redux store
  const repos = useSelector((state: RootState) => state.leaderboard.repos);
  const contributors = useSelector(
    (state: RootState) => state.leaderboard.contributionsDict
  );

  // Filter relevant repositories
  const filteredRepos = repos.filter((repo) =>
    [
      "FOSS_Official_Website",
      "nextra-doc-template",
      "fossuok.github.io",
    ].includes(repo.name)
  );

  // Map repository data
  const stats = filteredRepos.map((repo) => (
    <Paper className={classes.card} p="md" radius="lg" key={repo.name}>
      <Button
        component="a"
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        size="sm"
      >
        Repository <IconArrowUpRight />
      </Button>
      <Divider my="md" />
      <Group align="flex-end" gap="sm" mt={25}>
        <Text className={classes.value}>{repo.name}</Text>
      </Group>
      <Divider my="md" />

      {/* Display contributors */}
      <Avatar.Group>
        {contributors[repo.name]?.length ? (
          contributors[repo.name].map((contributor) => (
            <div key={contributor.avatar_url}>
              <Tooltip label={contributor.login} withArrow>
                <Avatar src={contributor.avatar_url} />
              </Tooltip>
            </div>
          ))
        ) : (
          <Text fz="xs" c="dimmed">
            No contributors available
          </Text>
        )}
      </Avatar.Group>
      <Divider my="md" />
      <Text fz="sm" c="dimmed" mt={7}>
        {repo.description || "No description available"}
      </Text>
    </Paper>
  ));

  return (
    <Container size={1000} className={classes.wrapper}>
      <Text className={classes.discription}>
        Want to Join the Fun? Check Out Our Latest Projects!
      </Text>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="md">
        {stats}
      </SimpleGrid>
    </Container>
  );
}
