class Solution {
public:
    int set(int n){
        int ans = 0;
        while(n > 0){
            ans += n % 2;
            n /= 2;
        }
        return ans;
    }
    bool canSortArray(vector<int>& nums) {
        int n = nums.size();
        int prevKmax = 0, currKmax = 0;
        int prevKmin = 0, currKmin = 0;
        for (int i = 0; i < n; i++){
            int setOnes = set(nums[i]);
            currKmax = nums[i];
            currKmin = nums[i];
            while(i + 1 < n && set(nums[i + 1]) == setOnes){
                currKmax = max(currKmax, nums[i + 1]);
                currKmin = min(currKmin, nums[i + 1]);
                i++;
            }
            // cout<<setOnes<<" "<<currKmax<<" "<<currKmin<<endl;
            if(prevKmax > currKmin){
                return false;
            }
            
            prevKmax = currKmax;
            prevKmin = currKmin;
        }
        return true;
    }
};
