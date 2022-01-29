import gql from "graphql-tag";

export const ATTACH_POST_TO_GROUP = gql`
  mutation GroupPost($post_id: Int!, $group_id: Int!) {
    AttachPostToGroup(post_id: $post_id, group_id: $group_id) {
      group_id
      post_id
    }
  }
`;

export const CREATE_GROUP = gql`
  mutation Group($input: CreateGroupInput) {
    createGroup(input: $input) {
      id
      name
      description
    }
  }
`;
