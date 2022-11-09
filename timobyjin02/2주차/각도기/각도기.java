class Solution {
  public int solution(int angle) {
    return angle == 180 ? 4 : angle < 90 ? 1 : angle == 90 ? 2 : angle > 90 ? 3 : 0;
  }
}