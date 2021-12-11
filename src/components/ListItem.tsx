/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { List } from "antd";
import styled from "styled-components";
import AnimatedNumber from "animated-number-react";

import { getRankAvatarBackgroundColor, getRankBackgroundColor } from "../utils";
import { Streamer } from "../types/streamer";

interface ListItemProps {
  item: Streamer;
  index: number;
}

const formatValue = (value: number) => `${value.toFixed(0)} pt`;
const DURATION = 100;

export const ListItem = ({ item, index }: ListItemProps) => {
  const rankBackgroundColor = useMemo(
    () => getRankBackgroundColor(index + 1),
    []
  );
  const rankAvatarBackgroundColor = useMemo(
    () => getRankAvatarBackgroundColor(index + 1),
    []
  );
  const rankTitleAvatarBackgroundColor = useMemo(
    () => `#${Math.random().toString(16).substr(-6)}`,
    []
  );

  return useMemo(
    () => (
      <List.Item style={{ backgroundColor: rankBackgroundColor }}>
        <List.Item.Meta
          avatar={
            <Avatar
              className="rank-avatar"
              size={28}
              backgroundColor={rankAvatarBackgroundColor}
              hasBorder={index >= 3}
            >
              {index + 1}
            </Avatar>
          }
          title={
            <TitleContainer>
              <Avatar
                size={34}
                backgroundColor={rankTitleAvatarBackgroundColor}
                hasBorder
              >
                {item.displayName[0]}
              </Avatar>
              <Title>{item.displayName}</Title>
            </TitleContainer>
          }
        />
        <ScoreText
          formatValue={formatValue}
          value={item.score}
          duration={DURATION}
        />
      </List.Item>
    ),
    [item]
  );
};

type AvatarProps = {
  size: number;
  backgroundColor?: string;
  hasBorder: boolean;
};

const Avatar = styled.div<AvatarProps>`
  margin: 0;
  padding: 0;
  color: ${(props) => (props.backgroundColor ? "#fff" : "#8b9ea8")};
  border: 1px solid
    ${(props) => (props.hasBorder ? "#c2d3ff" : props.backgroundColor)};
  font-size: ${(props) => props.size / 2.5}px;
  font-weight: 600;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: ${(props) => props.backgroundColor || "#fff"};
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
  border-radius: 50%;
  transition: ease all 0.3s;

  &.rank-avatar {
    z-index: 2;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h4`
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  font-weight: 500;
  margin-left: 15px;
`;

const ScoreText = styled(AnimatedNumber)`
  color: blue;
  font-size: 13px;
  font-weight: 500;
`;
