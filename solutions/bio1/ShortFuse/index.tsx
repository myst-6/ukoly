import { Link, SCode, SCodeBlock, SText, STitle, SList } from "components";

export const ShortFuse = () => {
  return (
    <>
      <STitle>Idea</STitle>
      <SText>
        We are only interested in timesteps when another fuse stops burning. 
        At each of these timesteps we can:
        <SList>
            <SText>Burn a new fuse at $1$ end.</SText>
            <SText>Burn a new fuse at $2$ ends.</SText>
            <SText>Burn a fuse that is already burning at one end at the other end.</SText>
        </SList>
        Note that we can burn multiple fuses during the same timestep. 
        Also note we don't have to start timing at the first timestep.
        Due to the small constraints on this problem, we can simulate the process. 
      </SText>

      <STitle>Solution</STitle>
      <SText>
        We can simulate the process using a Depth First Search (DFS, see more <Link href="https://usaco.guide/silver/graph-traversal?lang=cpp">here</Link>).
        During each step we can choose to:
        <SList>
            <SText>Burn a fuse as listed above.</SText>
            <SText>Move to the next timestep. If we are not already timing, we can also start timing.</SText>
        </SList>
        To store the states of the fuses, we can use a list storing the number of ends burning (or $3$ if the fuse is burnt completely), the last time it was burnt and the time it should finish burning for each fuse.
        Initially, all fuses aren't burning, so the start and finish times can be initialised to infinity. 
        Now we can simulate the process. For each fuse:
        <SList>
            <SText>
                If the fuse hasn't been burnt (state is $0$), we can:
                <SList>
                    <SText>Burn it at one end, and set the fuse's state to <SCode>(1, currentTime, currentTime + fuseLength)</SCode></SText>
                    <SText>Burn it at both ends, and set the fuse's state to <SCode>(2, currentTime, currentTime + fuseLength / 2)</SCode></SText>
                </SList>
            </SText>
            <SText>
                If the fuse is burning at one end (state is $1$), the time it has left is <SCode>endTime - currentTime</SCode>.
                Lighting the other end will half the time it has left, so it would end at <SCode>currentTime + (endTime - currentTime) / 2</SCode>. 
                This means at this timestep, we can set the fuse's state to <SCode>(2, currentTime, currentTime + (endTime - currentTime) / 2)</SCode>.
                Note that we can only do this if we didn't also burn the first end at this timestep. 
            </SText>
        </SList>
        Alternatively, we can move to the next timestep. 
        This is the smallest timestep at which a fuse will be burnt. We can easily calculate this by finding the minimum end time in the list of fuse states.
        For each fuse that ends at this timestep, we can mark it as burnt (by setting its state to <SCode>(3, INF, INF)</SCode>). 
        Additionally, if we are not already timing at this timestep, we can also start timing at the current time. 
      </SText>

      <SText>
        At each new timestep, we can check if we are timing. If we are, we can add the <SCode>currentTime - timingStartTime</SCode> to a set, storing all the times we are able to time. 
        Note that if we are not timing at the first timestep, we won't measure a time of $0$. To fix this, we can simply add $1$ to our answer. 
      </SText>

      <STitle>Code</STitle>
      <SCodeBlock path="shortfuse/sol" />
    </>
  );
};
